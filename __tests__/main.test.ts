import axios from "axios";
import jestOpenAPI from "jest-openapi";
import { execSync } from "node:child_process";
import { OpenAPI } from "openapi-types";
import oasDoc30 from "../generated/openapi.3.0.json";
import oasDoc30Dereferenced from "../generated/openapi.dereferenced.3.0.json";

const entities = [
	"",
	"authors",
	"concepts",
	"funders",
	"institutions",
	"publishers",
	"sources",
	"works",
];

function getGitEmail(): string | void {
	try {
		const gitEmail = execSync("git config user.email").toString().trim();
		if (gitEmail.match(/.+@.+\..+/)) {
			return gitEmail;
		} else {
			return
		}
	} catch (e) {
		return;
	}
}

function getMailto(): any {
	return process.env.MAILTO ?? getGitEmail();
}

const TEST_RUNS: number = 3;

const namedDocs: [string, doc: any, string][] = [
	["3.0 Document", oasDoc30, "generated/openapi.3.0.json"],
	["3.0 Dereferenced", oasDoc30Dereferenced, "generated/openapi.dereferenced.3.0.json"],
	// ["oasDoc31", oasDoc31, "generated/openapi.json"],
	// ["oasDoc31Dereferenced", oasDoc31Dereferenced, "generated/openapi.dereferenced.json"],
]
describe.each(namedDocs)(`%s`, (name, doc, location) => {
	jestOpenAPI(doc as unknown as OpenAPI.Document);
	// jestOpenAPI(location);
	test("Root url", async () => {
		const res = await axios.get("https://api.openalex.org");
		expect(res.status).toEqual(200);
		expect(res).toSatisfyApiSpec();
	})

	describe.each(entities)(`%s API tests`, (entity) => {
		const base = "https://api.openalex.org";
		let entityUrl: string = [base, entity].join("/");
		const listUrl = entityUrl;

		const mailto = getMailto()
		const mailtoParam = mailto ? `mailto=${mailto}` : undefined
		const fixtures: { url: string, params: string[] }[] = [{
			url: listUrl,
			params: ["per_page=3", mailtoParam],
		}, entity ? {
			url: [entityUrl, "random"].join("/"),
			params: [mailtoParam],
		} : null].filter((x) => x);

		describe.each(fixtures)(`%s`, (fixture) => {
			const url = [fixture.url, fixture.params.filter((x) => x).join("&")].join("?")
			test.each([...Array(TEST_RUNS).keys()])(`%s ${url}`, async () => {
				console.debug(url)
				const res = await axios.get(url);
				expect(res.status).toEqual(200);
				expect(res).toSatisfyApiSpec();
				await new Promise((resolve) => setTimeout(resolve, 10));
			});
		});
	});
})

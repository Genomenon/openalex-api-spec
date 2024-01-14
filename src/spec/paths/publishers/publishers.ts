import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { publisherSchema } from "~/spec/components/schemas/publishers/publisherSchema";
import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";

export const publishers = {
	"/publishers": {
		get: {
			description: "",
			operationId: "getPublishers",
			parameters: defaultListParameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									group_by: refSchema({ group_by_result }),
									meta: refSchema({ meta }),
									results: {
										items: refSchema({ publisherSchema }),
										type: "array",
									},
								},
								required: ["meta", "results", "group_by"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/publishers",
		},
	},
} satisfies PathsObject;

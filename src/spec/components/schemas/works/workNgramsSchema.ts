import { refSchema } from "~/spec/components";
import { ngram } from "~/spec/components/schemas/works/ngram";
import { ngramMeta } from "~/spec/components/schemas/works/ngramMeta";

export let workNgramsSchema: SchemaObject = {
	type: "object",
	properties: {
		meta: refSchema({ ngramMeta }),
		ngrams: refSchema({ ngram }),
	},
};

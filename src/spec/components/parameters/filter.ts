export const filter = {
	in: "query",
	name: "filter",
	required: false,
	style: "form",
	schema: {
		type: "array",
		items: {
			type: "string",
		}
	},
} satisfies ParameterObject;

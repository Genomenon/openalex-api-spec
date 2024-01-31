#!/usr/bin/env npx -y tsx
import type { FromSchema } from "json-schema-to-ts";
import { JSONSchema7 } from "json-schema-to-ts/lib/types/definitions";

const schema = {
	// "$id": "https://openapitools.org/openapi-generator-cli/config.schema.json",
	$schema: "http://json-schema.org/draft-07/schema#",
	title: "OpenAPI Generator CLI - Config",
	type: "object",
	required: ["generator-cli"],
	additionalProperties: false,
	properties: {
		$schema: {
			type: "string"
		},
		spaces: {
			type: "number",
			"default": 2
		},
		"generator-cli": {
			type: "object",
			required: ["version"],
			properties: {
				version: {
					type: "string"
				},
				storageDir: {
					type: "string"
				},
				// repository: {
				// 	queryUrl: {
				// 		type: "string",
				// 		"default": "https://search.maven.org/solrsearch/select?q=g:${group.id}+AND+a:${artifact.id}&core=gav&start=0&rows=200"
				// 	},
				// 	downloadUrl: {
				// 		type: "string",
				// 		"default": "https://repo1.maven.org/maven2/${groupId}/${artifactId}/${versionName}/${artifactId}-${versionName}.jar"
				// 	}
				// },
				useDocker: {
					type: "boolean",
					"default": false
				},
				dockerImageName: {
					type: "string",
					"default": "openapitools/openapi-generator-cli"
				},
				generators: {
					type: "object",
					additionalProperties: {
						$ref: "#/definitions/generator"
					}
				}
			}
		}
	},
	definitions: {
		strOrAnyObject: {
			anyOf: [
				{
					type: "string"
				},
				{
					type: "object",
					additionalProperties: true
				}
			]
		},
		generator: {
			type: "object",
			anyOf: [
				{
					required: ["inputSpec", "output", "generatorName"]
				},
				{
					required: ["glob", "output", "generatorName"]
				}
			],
			properties: {
				glob: {
					description: "matches local specification files using a glob pattern",
					type: "string",
					minLength: 1
				},
				output: {
					type: "string",
					minLength: 1
				},
				disabled: {
					type: "boolean",
					"default": false
				},
				generatorName: {
					description: "generator to use (see list command for list)",
					anyOf: [
						{
							type: "string"
						},
						{
							type: "string",
							"enum": [
								"ada",
								"ada-server",
								"android",
								"apache2",
								"apex",
								"asciidoc",
								"aspnetcore",
								"avro-schema",
								"bash",
								"c",
								"clojure",
								"cpp-pistache-server",
								"cpp-qt5-client",
								"cpp-qt5-qhttpengine-server",
								"cpp-restbed-server",
								"cpp-restsdk",
								"cpp-tizen",
								"csharp",
								"csharp-nancyfx",
								"csharp-netcore",
								"cwiki",
								"dart",
								"dart-dio",
								"dart-jaguar",
								"dynamic-html",
								"eiffel",
								"elixir",
								"elm",
								"erlang-client",
								"erlang-proper",
								"erlang-server",
								"flash",
								"fsharp-functions",
								"fsharp-giraffe-server",
								"go",
								"go-experimental",
								"go-gin-server",
								"go-server",
								"graphql-nodejs-express-server",
								"graphql-schema",
								"groovy",
								"haskell",
								"haskell-http-client",
								"html",
								"html2",
								"java",
								"java-inflector",
								"java-msf4j",
								"java-pkmst",
								"java-play-framework",
								"java-undertow-server",
								"java-vertx",
								"java-vertx-web",
								"javascript",
								"javascript-apollo",
								"javascript-closure-angular",
								"javascript-flowtyped",
								"jaxrs-cxf",
								"jaxrs-cxf-cdi",
								"jaxrs-cxf-client",
								"jaxrs-cxf-extended",
								"jaxrs-jersey",
								"jaxrs-resteasy",
								"jaxrs-resteasy-eap",
								"jaxrs-spec",
								"jmeter",
								"k6",
								"kotlin",
								"kotlin-server",
								"kotlin-spring",
								"kotlin-vertx",
								"lua",
								"markdown",
								"mysql-schema",
								"nim",
								"nodejs-express-server",
								"objc",
								"ocaml",
								"openapi",
								"openapi-yaml",
								"perl",
								"php",
								"php-laravel",
								"php-lumen",
								"php-silex",
								"php-slim4",
								"php-symfony",
								"php-ze-ph",
								"powershell",
								"powershell-experimental",
								"protobuf-schema",
								"python",
								"python-aiohttp",
								"python-blueplanet",
								"python-experimental",
								"python-flask",
								"r",
								"ruby",
								"ruby-on-rails",
								"ruby-sinatra",
								"rust",
								"rust-server",
								"scala-akka",
								"scala-akka-http-server",
								"scala-finch",
								"scala-gatling",
								"scala-lagom-server",
								"scala-play-server",
								"scala-sttp",
								"scalatra",
								"scalaz",
								"spring",
								"swift4",
								"swift5",
								"typescript-angular",
								"typescript-angularjs",
								"typescript-aurelia",
								"typescript-axios",
								"typescript-fetch",
								"typescript-inversify",
								"typescript-jquery",
								"typescript-node",
								"typescript-redux-query",
								"typescript-rxjs"
							]
						}
					]
				},
				auth: {
					type: "string",
					description: "adds authorization headers when fetching the OpenAPI definitions remotely. Pass in a URL-encoded string of name:header with a comma separating multiple values"
				},
				apiNameSuffix: {
					type: "string",
					description: "suffix that will be appended to all API names ('tags'). Default: Api. e.g. Pet => PetApi. Note: Only ruby, python, jaxrs generators support this feature at the moment"
				},
				apiPackage: {
					type: "string",
					description: "package for generated api classes"
				},
				artifactId: {
					type: "string",
					description: "artifactId in generated pom.xml. This also becomes part of the generated library's filename"
				},
				artifactVersion: {
					type: "string",
					description: "artifact version in generated pom.xml. This also becomes part of the generated library's filename"
				},
				config: {
					type: "string",
					description: "path to configuration file. It can be JSON or YAML"
				},
				dryRun: {
					type: "boolean",
					description: "try things out and report on potential changes (without actually making changes)"
				},
				engine: {
					type: "string",
					"enum": ["mustache", "handlebars"],
					description: "templating engine: \"mustache\" (default) or \"handlebars\" (beta)"
				},
				enablePostProcessFile: {
					type: "boolean",
					description: "enable post-processing file using environment variables"
				},
				generateAliasAsModel: {
					type: "boolean",
					description: "generate model implementation for aliases to map and array schemas. An 'alias' is an array, map, or list which is defined inline in a OpenAPI document and becomes a model in the generated code. A 'map' schema is an object that can have undeclared properties, i.e. the 'additionalproperties' attribute is set on that object. An 'array' schema is a list of sub schemas in a OAS document"
				},
				gitHost: {
					type: "string",
					description: "git host, e.g. gitlab.com"
				},
				gitRepoId: {
					type: "string",
					description: "git repo ID, e.g. openapi-generator"
				},
				gitUserId: {
					type: "string",
					description: "git user ID, e.g. openapitools"
				},
				globalProperty: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "sets specified global properties (previously called 'system properties') in the format of name=value,name=value (or multiple options, each with name=value)"
				},
				groupId: {
					type: "string",
					description: "groupId in generated pom.xml"
				},
				httpUserAgent: {
					type: "string",
					description: "HTTP user agent, e.g. codegen_csharp_api_client, default to 'OpenAPI-Generator/{packageVersion}}/{language}'"
				},
				inputSpec: {
					type: "string",
					description: "location of the OpenAPI spec, as URL or file (required if not loaded via config using -c)"
				},
				ignoreFileOverride: {
					type: "string",
					description: "specifies an override location for the .openapi-generator-ignore file. Most useful on initial generation.\n"
				},
				importMappings: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "specifies mappings between a given class and the import that should be used for that class in the format of type=import,type=import. You can also have multiple occurrences of this option"
				},
				instantiationTypes: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "sets instantiation type mappings in the format of type=instantiatedType,type=instantiatedType.For example (in Java): array=ArrayList,map=HashMap. In other words array types will get instantiated as ArrayList in generated code. You can also have multiple occurrences of this option"
				},
				invokerPackage: {
					type: "string",
					description: "root package for generated code"
				},
				languageSpecificPrimitives: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "specifies additional language specific primitive types in the format of type1,type2,type3,type3. For example: String,boolean,Boolean,Double. You can also have multiple occurrences of this option"
				},
				legacyDiscriminatorBehavior: {
					type: "boolean",
					description: "this flag is used by OpenAPITools codegen to influence the processing of the discriminator attribute in OpenAPI documents. This flag has no impact if the OAS document does not use the discriminator attribute. The default value of this flag is set in each language-specific code generator (e.g. Python, Java, go...)using the method toModelName. Note to developers supporting a language generator in OpenAPITools; to fully support the discriminator attribute as defined in the OAS specification 3.x, language generators should set this flag to true by default; however this requires updating the mustache templates to generate a language-specific discriminator lookup function that iterates over {{#mappedModels}} and does not iterate over {{children}}, {{#anyOf}}, or {{#oneOf}}"
				},
				library: {
					type: "string",
					description: "library template (sub-template)"
				},
				logToStderr: {
					type: "boolean",
					description: "write all log messages (not just errors) to STDOUT. Useful for piping the JSON output of debug options (e.g. `-DdebugOperations`) to an external parser directly while testing a generator"
				},
				minimalUpdate: {
					type: "boolean",
					description: "only write output files that have changed"
				},
				modelNamePrefix: {
					type: "string",
					description: "prefix that will be prepended to all model names"
				},
				modelNameSuffix: {
					type: "string",
					description: "suffix that will be appended to all model names"
				},
				modelPackage: {
					type: "string",
					description: "package for generated models"
				},
				additionalProperties: {
					description: "sets additional properties that can be referenced by the mustache templates in the format of name=value,name=value. You can also have multiple occurrences of this option",
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					]
				},
				packageName: {
					type: "string",
					description: "package for generated classes (where supported)"
				},
				releaseNote: {
					type: "string",
					description: "release note, default to 'Minor update'"
				},
				removeOperationIdPrefix: {
					type: "boolean",
					description: "remove prefix of operationId, e.g. config_getId => getId"
				},
				reservedWordsMappings: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "specifies how a reserved name should be escaped to. Otherwise, the default _<name> is used. For example id=identifier. You can also have multiple occurrences of this option"
				},
				skipOverwrite: {
					type: "boolean",
					description: "specifies if the existing files should be overwritten during the generation"
				},
				serverVariables: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "sets server variables overrides for spec documents which support variable templating of servers"
				},
				skipValidateSpec: {
					type: "boolean",
					description: "skips the default behavior of validating an input specification"
				},
				strictSpec: {
					type: "boolean",
					description: "'MUST' and 'SHALL' wording in OpenAPI spec is strictly adhered to. e.g. when false, no fixes will be applied to documents which pass validation but don't follow the spec"
				},
				templateDir: {
					type: "string",
					description: "folder containing the template files"
				},
				typeMappings: {
					anyOf: [
						{
							type: "string"
						},
						{
							type: "object",
							additionalProperties: true
						}
					],
					description: "sets mappings between OpenAPI spec types and generated code types in the format of OpenAPIType=generatedType,OpenAPIType=generatedType. For example: array=List,map=Map,string=String. You can also have multiple occurrences of this option"
				},
				verbose: {
					type: "boolean",
					description: "verbose mode"
				}
			}
		}
	}
} as const satisfies JSONSchema7;
// } as const satisfies JSONSchema;
// } as const;

export type OpenAPIToolsConfig = FromSchema<typeof schema>;
export type GeneratorCliConfig = OpenAPIToolsConfig["generator-cli"];
export type Generator = GeneratorCliConfig["generators"];
export type GeneratorConfig = Generator[string];

const generatorConfig = {
	generatorName: "typescript-node",
	// glob: "generated/openapi.json",
	inputSpec: "generated/openapi.json",
	output: "generated/something",
	disabled: false,
};
// function objectToJsonWithSchema<
// 	T extends FromSchema<S> & { $schema?: string },
// 	S extends JSONSchema & { $id: string }
// >(obj: T, schema: S): T {
// 	const typedObject: T = obj;
// 	typedObject.$schema = schema.$id
// 	return typedObject
// }

// console.log(objectToJsonWithSchema({
// 	"generator-cli": {
// 		generators: {}
// 	}
// },
// 	schema,
// ));

const generator: Generator = {
	something: generatorConfig
};

// const config = {
// 	"generator-cli": {
// 		generators: {
// 			test: {
// 				generatorName: "typescript-node",
// 				// glob: "generated/openapi.json",
// 				inputSpec: "generated/openapi.json",
// 				output: "generated/something",
// 				disabled: false,
// 			}
// 			// ...generator
// 			// apache2: {
// 			// 	generatorName: "apache2",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/config/apache2"
// 			// },
// 			// asciidoc: {
// 			// 	generatorName: "asciidoc",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/documentation/asciidoc"
// 			// },
// 			// bash: {
// 			// 	generatorName: "bash",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/clients/bash"
// 			// },
// 			// dereferenced_yaml: {
// 			// 	generatorName: "openapi-yaml",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.dereferences.json",
// 			// 	output: "#{cwd}/generated/documentation/openapi-yaml-dereferenced"
// 			// },
// 			// "graphql-schema": {
// 			// 	generatorName: "graphql-schema",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/schemas/graphql"
// 			// },
// 			// markdown: {
// 			// 	generatorName: "markdown",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/documentation/markdown"
// 			// },
// 			// "nodejs-express-server": {
// 			// 	additionalProperties: {
// 			// 		npmName: "openalex-api"
// 			// 	},
// 			// 	generatorName: "nodejs-express-server",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/servers/nodejs-express-server"
// 			// },
// 			// openapi: {
// 			// 	generatorName: "openapi",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/documentation/openapi-json"
// 			// },
// 			// "openapi-yaml": {
// 			// 	generatorName: "openapi-yaml",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/documentation/openapi-yaml"
// 			// },
// 			// plantuml: {
// 			// 	generatorName: "plantuml",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-api-spec",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/documentation/plantuml"
// 			// },
// 			// python: {
// 			// 	additionalProperties: {
// 			// 		packageName: "openalex_api",
// 			// 		projectName: "OpenAlex API",
// 			// 		packageVersion: "1.0.0"
// 			// 	},
// 			// 	generatorName: "python",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-python",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/clients/python"
// 			// },
// 			// typescript: {
// 			// 	additionalProperties: {
// 			// 		npmName: "@mearman/openalex-typescript",
// 			// 		supportsES6: "true",
// 			// 		withInterfaces: true
// 			// 	},
// 			// 	generatorName: "typescript",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-typescript",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/clients/typescript"
// 			// },
// 			// "typescript-fetch": {
// 			// 	additionalProperties: {
// 			// 		npmName: "@mearman/openalex-typescript-fetch"
// 			// 	},
// 			// 	generatorName: "typescript-fetch",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-typescript-fetch",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/clients/typescript-fetch"
// 			// },
// 			// "typescript-node": {
// 			// 	additionalProperties: {
// 			// 		npmName: "@mearman/openalex-typescript-node",
// 			// 		supportsES6: "true"
// 			// 	},
// 			// 	generatorName: "typescript-node",
// 			// 	gitHost: "github.com",
// 			// 	gitRepoId: "openalex-typescript-node",
// 			// 	gitUserId: "Mearman",
// 			// 	glob: "generated/openapi.json",
// 			// 	output: "#{cwd}/generated/clients/typescript-node"
// 			// }
// 		},
// 		version: "7.2.0",
// 		useDocker: true,
// 		// dockerImageName: "alpine"
// 	},
// } satisfies OpenAPIToolsConfig;

/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface TasksSetRequirementsRequest {
    /**
     * Task ID
     */
    task: string;
    /**
     * A JSON object containing requirements strings by key
     */
    requirements: object;
}

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



export interface TasksDeleteResponse {
    /**
     * Indicates whether the task was deleted
     */
    deleted?: boolean;
    /**
     * Number of child tasks whose parent property was updated
     */
    updated_children?: number;
    /**
     * Number of models whose task property was updated
     */
    updated_models?: number;
    /**
     * Number of dataset versions whose task property was updated
     */
    updated_versions?: number;
    /**
     * Response from frames.rollback
     */
    frames?: object;
    /**
     * Response from events.delete_for_task
     */
    events?: object;
}

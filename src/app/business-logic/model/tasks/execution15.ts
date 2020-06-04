/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Execution15 {
    /**
     * Queue ID where task was queued.
     */
    queue?: string;
    /**
     * Percentage of frames to use for testing only
     */
    test_split?: number;
    /**
     * Json object containing the Task parameters
     */
    parameters?: object;
    /**
     * Execution input model ID Not applicable for Register (Import) tasks
     */
    model?: string;
    /**
     * Json object representing the Model descriptors
     */
    model_desc?: object;
    /**
     * Json object representing the ids of the labels in the model.                 The keys are the layers\' names and the values are the IDs.                 Not applicable for Register (Import) tasks.                 Mandatory for Training tasks
     */
    model_labels?: { [key: string]: number; };
    /**
     * Framework related to the task. Case insensitive. Mandatory for Training tasks. 
     */
    framework?: string;
    /**
     * key to embedded Dataview mapping
     */
    dataviews?: object;
}

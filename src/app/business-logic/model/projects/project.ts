/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Project {
    /**
     * Project id
     */
    id?: string;
    /**
     * Project name
     */
    name?: string;
    /**
     * Project description
     */
    description?: string;
    /**
     * Associated user id
     */
    user?: string;
    /**
     * Company id
     */
    company?: string;
    /**
     * Creation time
     */
    created?: Date;
    /**
     * User-defined tags
     */
    tags?: Array<string>;
    /**
     * System tags. This field is reserved for system use, please don\'t use it.
     */
    system_tags?: Array<string>;
    /**
     * The default output destination URL for new tasks under this project
     */
    default_output_destination?: string;
    /**
     * Last project update time. Reflects the last time the project metadata was changed or a task in this project has changed status
     */
    last_update?: Date;
}

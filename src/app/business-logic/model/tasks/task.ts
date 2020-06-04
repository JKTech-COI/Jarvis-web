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

import { Execution } from './execution';
import { LastMetricsEvent } from './lastMetricsEvent';
import { Output } from './output';
import { Script } from './script';
import { TaskStatusEnum } from './taskStatusEnum';
import { TaskTypeEnum } from './taskTypeEnum';


export interface Task {
    /**
     * Task id
     */
    id?: string;
    /**
     * Task Name
     */
    name?: string;
    /**
     * Associated user id
     */
    user?: string;
    /**
     * Company ID
     */
    company?: string;
    type?: TaskTypeEnum;
    status?: TaskStatusEnum;
    /**
     * Free text comment
     */
    comment?: string;
    /**
     * Task creation time (UTC) 
     */
    created?: Date;
    /**
     * Task start time (UTC)
     */
    started?: Date;
    /**
     * Task end time (UTC)
     */
    completed?: Date;
    /**
     * Parent task id
     */
    parent?: string;
    /**
     * Project ID of the project to which this task is assigned
     */
    project?: string;
    output?: Output;
    execution?: Execution;
    script?: Script;
    /**
     * User-defined tags list
     */
    tags?: Array<string>;
    /**
     * System tags list. This field is reserved for system use, please don\'t use it.
     */
    system_tags?: Array<string>;
    /**
     * Last status change time
     */
    status_changed?: Date;
    /**
     * free text string representing info about the status
     */
    status_message?: string;
    /**
     * Reason for last status change
     */
    status_reason?: string;
    /**
     * Last status change time
     */
    published?: Date;
    /**
     * ID of last worker that handled the task
     */
    last_worker?: string;
    /**
     * Last time a worker reported while working on this task
     */
    last_worker_report?: Date;
    /**
     * Last time this task was created, updated, changed or events for this task were reported
     */
    last_update?: Date;
    /**
     * Last iteration reported for this task
     */
    last_iteration?: number;
    /**
     * Last metric variants (hash to events), one for each metric hash
     */
    last_metrics?: { [key: string]: any; };
}

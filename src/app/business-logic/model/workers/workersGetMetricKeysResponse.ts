/**
 * workers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { MetricsCategory } from './metricsCategory';


export interface WorkersGetMetricKeysResponse {
    /**
     * List of unique metric categories found in the statistics of the requested   workers.
     */
    categories?: Array<MetricsCategory>;
}

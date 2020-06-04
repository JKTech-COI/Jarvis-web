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

import { FilterByRoiEnum } from './filterByRoiEnum';
import { FilterLabelRule } from './filterLabelRule';


export interface FilterRule {
    /**
     * List of FilterLabelRule (\'AND\' connection)  disabled - No filtering by ROIs. Select all frames, even if they don\'t have ROIs (all frames)  no_rois - Select only frames without ROIs (empty frames)  label_rules - Select frames according to label rules
     */
    label_rules?: Array<FilterLabelRule>;
    filter_by_roi?: FilterByRoiEnum;
    /**
     * Frame filter, in Lucene query syntax
     */
    frame_query?: string;
    /**
     * Sources filter, in Lucene query syntax. Filters sources in each frame.
     */
    sources_query?: string;
    /**
     * Dataset ID. Must be a dataset which is in the task\'s view. If set to \'*\' all datasets in View are used.
     */
    dataset: string;
    /**
     * Dataset version to apply rule to. Must belong to the dataset and be in the task\'s view. If set to \'*\' all version of the datasets in View are used.
     */
    version?: string;
    /**
     * Rule weight. Default is 1
     */
    weight?: number;
}

/**
 * events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/**
 *  An entire plot (not single datapoint) and it\'s layout.             Used for plotting ROC curves, confidence matrices, etc. when evaluating the net.
 */
export interface MetricsPlotEvent {
    /**
     * Epoch milliseconds UTC, will be set by the server if not set.
     */
    timestamp?: number;
    /**
     * \'plot\'
     */
    type: object;
    /**
     * Task ID (required)
     */
    task: string;
    /**
     * Iteration
     */
    iter?: number;
    /**
     * Metric name, e.g. \'count\', \'loss\', \'accuracy\'
     */
    metric?: string;
    /**
     * E.g. \'class_1\', \'total\', \'average
     */
    variant?: string;
    /**
     * An entire plot (not single datapoint) and it\'s layout.                     Used for plotting ROC curves, confidence matrices, etc. when evaluating the net.                     
     */
    plot_str?: string;
}

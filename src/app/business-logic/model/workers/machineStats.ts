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



export interface MachineStats {
    /**
     * Average CPU usage per core
     */
    cpu_usage?: Array<number>;
    /**
     * Average GPU usage per GPU card
     */
    gpu_usage?: Array<number>;
    /**
     * Used memory MBs
     */
    memory_used?: number;
    /**
     * Free memory MBs
     */
    memory_free?: number;
    /**
     * GPU free memory MBs
     */
    gpu_memory_free?: Array<number>;
    /**
     * GPU used memory MBs
     */
    gpu_memory_used?: Array<number>;
    /**
     * Mbytes per second
     */
    network_tx?: number;
    /**
     * Mbytes per second
     */
    network_rx?: number;
    /**
     * Mbytes free space of /home drive
     */
    disk_free_home?: number;
    /**
     * Mbytes free space of /tmp drive
     */
    disk_free_temp?: number;
    /**
     * Mbytes read per second
     */
    disk_read?: number;
    /**
     * Mbytes write per second
     */
    disk_write?: number;
    /**
     * CPU temperature
     */
    cpu_temperature?: Array<number>;
    /**
     * GPU temperature
     */
    gpu_temperature?: Array<number>;
}

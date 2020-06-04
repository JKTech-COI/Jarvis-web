/**
 * auth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface AuthValidateUserRequest {
    /**
     * Email address uniquely identifying the user
     */
    email: string;
    /**
     * Provider ID indicating the external provider used to authenticate the user
     */
    provider: string;
    /**
     * Unique user ID assigned by the external provider
     */
    provider_user_id: string;
    /**
     * Provider-issued token for this user
     */
    provider_token?: string;
}

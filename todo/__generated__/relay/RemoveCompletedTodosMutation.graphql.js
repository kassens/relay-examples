/**
 * @flow
 * @relayHash 9b59adaadbe575a0ffd243764cbfe932
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveCompletedTodosMutationVariables = {|
  userId: string
|};
export type RemoveCompletedTodosMutationResponse = {|
  +removeCompletedTodos: ?{|
    +deletedTodoIds: ?$ReadOnlyArray<string>,
    +user: {|
      +completedCount: number,
      +totalCount: number,
    |},
  |}
|};
export type RemoveCompletedTodosMutation = {|
  variables: RemoveCompletedTodosMutationVariables,
  response: RemoveCompletedTodosMutationResponse,
|};
*/


/*
mutation RemoveCompletedTodosMutation(
  $userId: ID!
) {
  removeCompletedTodos(userId: $userId) {
    deletedTodoIds
    user {
      completedCount
      totalCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedTodoIds",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "completedCount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveCompletedTodosMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeCompletedTodos",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveCompletedTodosMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeCompletedTodos",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveCompletedTodosMutation",
    "id": null,
    "text": "mutation RemoveCompletedTodosMutation(\n  $userId: ID!\n) {\n  removeCompletedTodos(userId: $userId) {\n    deletedTodoIds\n    user {\n      completedCount\n      totalCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c62b2f156221c6bef190435799445acf';
module.exports = node;

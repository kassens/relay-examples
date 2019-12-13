/**
 * @flow
 * @relayHash 0261d3954d7a3d8e3ea8f75115869825
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveTodoMutationVariables = {|
  id: string,
  userId: string,
|};
export type RemoveTodoMutationResponse = {|
  +removeTodo: ?{|
    +deletedTodoId: string,
    +user: {|
      +completedCount: number,
      +totalCount: number,
    |},
  |}
|};
export type RemoveTodoMutation = {|
  variables: RemoveTodoMutationVariables,
  response: RemoveTodoMutationResponse,
|};
*/


/*
mutation RemoveTodoMutation(
  $id: ID!
  $userId: ID!
) {
  removeTodo(id: $id, userId: $userId) {
    deletedTodoId
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
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
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
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedTodoId",
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
    "name": "RemoveTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
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
    "name": "RemoveTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
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
    "name": "RemoveTodoMutation",
    "id": null,
    "text": "mutation RemoveTodoMutation(\n  $id: ID!\n  $userId: ID!\n) {\n  removeTodo(id: $id, userId: $userId) {\n    deletedTodoId\n    user {\n      completedCount\n      totalCount\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e332dd9b37b7f8f9c04e13860a90ff26';
module.exports = node;

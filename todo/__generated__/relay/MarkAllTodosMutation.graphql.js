/**
 * @flow
 * @relayHash 7936dc0bb728edf9761c02e7a4428d36
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MarkAllTodosMutationVariables = {|
  complete: boolean,
  userId: string,
|};
export type MarkAllTodosMutationResponse = {|
  +markAllTodos: ?{|
    +changedTodos: ?$ReadOnlyArray<{|
      +id: string,
      +complete: boolean,
    |}>,
    +user: {|
      +id: string,
      +completedCount: number,
    |},
  |}
|};
export type MarkAllTodosMutation = {|
  variables: MarkAllTodosMutationVariables,
  response: MarkAllTodosMutationResponse,
|};
*/


/*
mutation MarkAllTodosMutation(
  $complete: Boolean!
  $userId: ID!
) {
  markAllTodos(complete: $complete, userId: $userId) {
    changedTodos {
      id
      complete
    }
    user {
      id
      completedCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "complete",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAllTodos",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "complete",
        "variableName": "complete"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "MarkAllTodosPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changedTodos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "complete",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completedCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MarkAllTodosMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MarkAllTodosMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MarkAllTodosMutation",
    "id": null,
    "text": "mutation MarkAllTodosMutation(\n  $complete: Boolean!\n  $userId: ID!\n) {\n  markAllTodos(complete: $complete, userId: $userId) {\n    changedTodos {\n      id\n      complete\n    }\n    user {\n      id\n      completedCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '573f1d8a57940f58bc6621e411c4b0a7';
module.exports = node;

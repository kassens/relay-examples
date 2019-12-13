/**
 * @flow
 * @relayHash c715caa241fa1f7c24e064359da62dc1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoStatusMutationVariables = {|
  complete: boolean,
  id: string,
  userId: string,
|};
export type ChangeTodoStatusMutationResponse = {|
  +changeTodoStatus: ?{|
    +todo: {|
      +id: string,
      +complete: boolean,
    |},
    +user: {|
      +id: string,
      +completedCount: number,
    |},
  |}
|};
export type ChangeTodoStatusMutation = {|
  variables: ChangeTodoStatusMutationVariables,
  response: ChangeTodoStatusMutationResponse,
|};
*/


/*
mutation ChangeTodoStatusMutation(
  $complete: Boolean!
  $id: ID!
  $userId: ID!
) {
  changeTodoStatus(complete: $complete, id: $id, userId: $userId) {
    todo {
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
    "name": "changeTodoStatus",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "complete",
        "variableName": "complete"
      },
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
    "concreteType": "ChangeTodoStatusPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": false,
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
    "name": "ChangeTodoStatusMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangeTodoStatusMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangeTodoStatusMutation",
    "id": null,
    "text": "mutation ChangeTodoStatusMutation(\n  $complete: Boolean!\n  $id: ID!\n  $userId: ID!\n) {\n  changeTodoStatus(complete: $complete, id: $id, userId: $userId) {\n    todo {\n      id\n      complete\n    }\n    user {\n      id\n      completedCount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3e3b148d8bfeca25af88afb9a5f4bda5';
module.exports = node;

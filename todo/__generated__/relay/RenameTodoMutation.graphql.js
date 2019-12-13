/**
 * @flow
 * @relayHash cb13d9c82853e7d3062178082561ca52
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RenameTodoMutationVariables = {|
  id: string,
  text: string,
|};
export type RenameTodoMutationResponse = {|
  +renameTodo: ?{|
    +todo: {|
      +id: string,
      +text: string,
    |}
  |}
|};
export type RenameTodoMutation = {|
  variables: RenameTodoMutationVariables,
  response: RenameTodoMutationResponse,
|};
*/


/*
mutation RenameTodoMutation(
  $id: ID!
  $text: String!
) {
  renameTodo(id: $id, text: $text) {
    todo {
      id
      text
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
    "name": "text",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "renameTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      }
    ],
    "concreteType": "RenameTodoPayload",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
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
    "name": "RenameTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RenameTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RenameTodoMutation",
    "id": null,
    "text": "mutation RenameTodoMutation(\n  $id: ID!\n  $text: String!\n) {\n  renameTodo(id: $id, text: $text) {\n    todo {\n      id\n      text\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d0378c391caa659d71091201a107e37';
module.exports = node;

// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {fromGlobalId} from 'graphql-relay';
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {GraphQLTodo} from '../nodes';
import {getTodoOrThrow, renameTodo, Todo} from '../../database';

type Input = {
  +id: string,
  +text: string,
  ...
};

type Payload = {|
  +localTodoId: string,
|};

const RenameTodoMutation = {
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    text: {type: new GraphQLNonNull(GraphQLString)},
  },
  type: new GraphQLObjectType({
    name: 'RenameTodoPayload',
    fields: {
      todo: {
        type: new GraphQLNonNull(GraphQLTodo),
        resolve: ({localTodoId}: Payload): Todo => getTodoOrThrow(localTodoId),
      },
    },
  }),
  resolve: (_: mixed, {id, text}: Input): Payload => {
    const localTodoId = fromGlobalId(id).id;
    renameTodo(localTodoId, text);
    return {localTodoId};
  },
};

export {RenameTodoMutation};

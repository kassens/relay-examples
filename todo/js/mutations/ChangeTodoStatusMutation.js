// @flow
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

import {
  commitMutation,
  graphql,
  type Disposable,
  type Environment,
} from 'react-relay';

import type {Todo_todo} from 'relay/Todo_todo.graphql';
import type {Todo_user} from 'relay/Todo_user.graphql';
import type {ChangeTodoStatusMutationResponse} from 'relay/ChangeTodoStatusMutation.graphql';

const mutation = graphql`
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
`;

function getOptimisticResponse(
  complete: boolean,
  todo: Todo_todo,
  user: Todo_user,
): ChangeTodoStatusMutationResponse {
  return {
    changeTodoStatus: {
      todo: {
        complete: complete,
        id: todo.id,
      },
      user: {
        id: user.id,
        completedCount: complete
          ? user.completedCount + 1
          : user.completedCount - 1,
      },
    },
  };
}

function commit(
  environment: Environment,
  complete: boolean,
  todo: Todo_todo,
  user: Todo_user,
): Disposable {
  return commitMutation(environment, {
    mutation,
    variables: {
      complete,
      userId: user.userId,
      id: todo.id,
    },
    optimisticResponse: getOptimisticResponse(complete, todo, user),
  });
}

export default {commit};

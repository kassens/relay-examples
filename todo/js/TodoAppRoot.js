import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import TodoApp from './components/TodoApp';

export default function TodoAppRoot(props) {
  return (
    <QueryRenderer
      environment={props.environment}
      query={graphql`
        query appQuery {
          viewer {
            ...TodoApp_viewer
          }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (props) {
          return <TodoApp viewer={props.viewer} />;
        } else {
          return <div>Loading</div>;
        }
      }}
    />
  );
}

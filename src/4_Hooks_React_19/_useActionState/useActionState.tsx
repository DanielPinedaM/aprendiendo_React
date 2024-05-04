/* 
https://react.dev/blog/2024/04/25/react-19#new-hook-useactionstate
*/

const [error, submitAction, isPending] = useActionState(
    async (previousState, newName) => {
      const error = await updateName(newName);
      if (error) {
        // You can return any result of the action.
        // Here, we return only the error.
        return error;
      }
  
      // handle success
      return null;
    },
    null,
  );

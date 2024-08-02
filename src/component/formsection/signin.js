import { useAuth } from "../../backend/context/authcontext"

export const SignIn = () => {
  const {userSignin, setUserSignin,handleSignin,googleSignIn} = useAuth();
  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" onSubmit={handleSignin}>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email"
                value={userSignin.email} 
                onChange={(e)=>setUserSignin({...userSignin, email:e.target.value})}
                autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" 
                value={userSignin.password} 
                onChange={(e)=>setUserSignin({...userSignin, password:e.target.value})}
                autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            <span>or</span>
          </form>
          <div>
              <button type="button" onClick={googleSignIn} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Google Login</button>
            </div>
        </div>
      </div>
    </>
  )
}
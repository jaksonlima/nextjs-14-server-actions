function Login() {
  async function loginAction(props: FormData) {
    "use server";
    console.log("LOGIN ACTION");
    console.log(props);
  }

  return (
    <>
      <div className="m-2">
        <div className="bg-white p-8 rounded shadow w-96">
          <form action={loginAction}>
            <div>
              <label className="block text-sm text-gray-600">Usuário</label>
              <input
                type="text"
                name="username"
                className="w-full p-2 border rounded shadow mt-1 text-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Senha</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded shadow mt-1 text-black"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full mt-4"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

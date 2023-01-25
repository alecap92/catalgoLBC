import { userList } from "@/data/userList";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [form, setForm] = useState([]);
  const [error, setError] = useState();

  const router = useRouter();

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log();

    const filtrado = userList.filter((item) => {
      return item.email.toLowerCase() === form.email.toLowerCase();
    });

    if (filtrado.length > 0) {
      console.log("Autenticado correctamente");
      sessionStorage.setItem("autenticado", "true");

      router.push("/productos/coffee");
    } else {
      console.log("Fallo autenticacion");
      sessionStorage.setItem("autenticado", "false");
      setError(false);
      return;
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input type="email" id="email" name="email" className="form-control form-control-lg" onChange={(e) => formHandler(e)} />
                  <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="password" name="password" className="form-control form-control-lg" onChange={(e) => formHandler(e)} />
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                </div>
                {error === false ? (
                  <div className="alert alert-danger" role="alert">
                    Error de autenticacion
                  </div>
                ) : (
                  ""
                )}

                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e) => submitHandler(e)}>
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

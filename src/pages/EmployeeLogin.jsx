import { useState } from 'react';
import "./EmployeeLogin.css";
// import Policies from './Policies';
 import Dashboard from './Dashboard';

export default function EmployeeLogin() {
  const [activeTab, setActiveTab] = useState("employee");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false); // لتتبع تسجيل الدخول

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // يوزر تجريبي
    const demoUsers = {
      employee: { email: "test@company.com", password: "12345678" },
      Supplier: { email: "Supplier@company.com", password: "12345678" }
    };

    const user = demoUsers[activeTab];

    if (form.email === user.email && form.password === user.password) {
      alert(`${activeTab === "employee" ? "Employee" : "Supplier"} Login Successful`);
      setLoggedIn(true); // نجاح الدخول
    } else {
      alert("Invalid Credentials");
    }
  };

  // بعد تسجيل الدخول نعرض صفحة السياسات فقط للموظف
 if (loggedIn && activeTab === "employee") {
    return <Dashboard />; }

  return (
    <section className='emp-login'>
      <div className='emp-login__card'>
        <img src="/assets/img/logo/logo2.jpg" alt="logo" />

        {/* Tabs */}
        <div className="emp-tabs">
          <button 
            className={activeTab === "employee" ? "active" : ""}
            onClick={() => setActiveTab("employee")}
          >
            Employee
          </button>
          <button 
            className={activeTab === "Supplier" ? "active" : ""}
            onClick={() => setActiveTab("Supplier")}
          >
            Supplier
          </button>
        </div>

        <h2>{activeTab === "employee" ? "Employee Login" : "Supplier Login"}</h2>

        <form onSubmit={handleSubmit}>
          <div className='emp-field'>
            <label>Email</label>
            <input
              type="email"
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Email'
            />
          </div>

          <div className='emp-field'>
            <label>Password</label>
            <input
              type="password"
              name='password'
              required
              value={form.password}
              onChange={handleChange}
              placeholder='Enter Password'
            />
          </div>

          <button type='submit' className='emp-btn'>
            Login
          </button>
        </form>

      </div>
    </section>
  );
}
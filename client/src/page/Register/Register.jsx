const Register = () => {
  return (
    <div>
      <form>
        <h2>Створи свій профіль</h2>
        <input type="name" name="name" placeholder="Прізвище" />
        <input type="name" name="lastname" placeholder="Ім'я" />
        <input type="email" name="email" placeholder="Пошта" />
        <input type="password" name="pass" placeholder="Пароль" />
      </form>
    </div>
  );
};

export default Register;

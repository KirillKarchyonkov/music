import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Извлекаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code"); // Параметр "code" для OAuth

    if (code) {
      // Получаем токен доступа
      fetch(`https://api.service.com/oauth/token?code=${code}&client_id=ВАШ_CLIENT_ID&client_secret=ВАШ_CLIENT_SECRET&redirect_uri=ВАШ_REDIRECT_URI`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Токен доступа:", data.access_token);
          // Сохраняем токен (например, в localStorage)
          localStorage.setItem("access_token", data.access_token);
          // Перенаправляем пользователя на главную страницу
          navigate("/");
        })
        .catch((error) => {
          console.error("Ошибка при получении токена:", error);
        });
    } else {
      console.error("Параметр 'code' не найден в URL");
    }
  }, [navigate]);

  return <div>Обработка авторизации...</div>;
}

export default Callback;
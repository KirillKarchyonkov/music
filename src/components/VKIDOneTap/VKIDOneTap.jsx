/*import { useEffect, useRef } from 'react';

const VKIDOneTap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Динамически добавляем скрипт VKID SDK
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js';
    script.async = true;
    script.onload = () => initVKID(); // Инициализация после загрузки скрипта
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Удаляем скрипт при размонтировании
    };
  }, []);

  const initVKID = () => {
    if (window.VKIDSDK) {
      const VKID = window.VKIDSDK;

      VKID.Config.init({
        app: 53133647,
        redirectUrl: 'https://kirillkarchyonkov.github.io/music',
        responseMode: VKID.ConfigResponseMode.Callback,
        source: VKID.ConfigSource.LOWCODE,
        scope: '',
      });

      const oneTap = new VKID.OneTap();
      oneTap
        .render({
          container: containerRef.current, // Используем useRef для контейнера
          showAlternativeLogin: true,
          oauthList: ['ok_ru', 'mail_ru'],
        })
        .on(VKID.WidgetEvents.ERROR, vkidOnError)
        .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, (payload) => {
          const { code, device_id: deviceId } = payload;
          VKID.Auth.exchangeCode(code, deviceId)
            .then(vkidOnSuccess)
            .catch(vkidOnError);
        });
    }
  };

  const vkidOnSuccess = (data) => {
    console.log('Успех:', data);
    // Сохраните токен в состоянии или перенаправьте пользователя
  };

  const vkidOnError = (error) => {
    console.error('Ошибка:', error);
  };

  return <div ref={containerRef}></div>; // Контейнер через useRef
};

export default VKIDOneTap;*/
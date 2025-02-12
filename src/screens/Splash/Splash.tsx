import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AppSplash } from '../../assets';
import { AppText } from '../../components';
import { Path } from '../../configs';
import { navigate } from '../../libs';

const Splash = () => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate(Path.Onboarding);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppSplash />
      <AppText size="2xl" weight="semiBold" alpha={1} style={{ marginTop: 19 }}>
        UpTodo
      </AppText>
    </View>
  );
};

export { Splash };

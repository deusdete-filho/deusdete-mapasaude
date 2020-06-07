import React, { useState, useEffect } from "react";
import { AppLoading } from 'expo';

import * as Location from 'expo-location';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Navbar,
  Logo,
  Header,
  Description,
  DescriptionText,
  DescriptionBold,
  Img,
  Content,
  Title,
  Subtitle,
  OptionGroup,
  Option,
  OptionInfo,
  OptionText,
} from "./styles";

import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";

import ImgMap from "../../assets/map.png";

export default Home = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    const getPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setMessage('O usuário não autorizou o uso da geolocalização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      setMessage(JSON.stringify(location, null, 4));
      setLocation(location.coords);
    }

    getPosition();
  }, [])

  const navigateToHospital = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'HOSPITAL',
      icon: 'hospital-building'
    }
    );
  };

  const navigateToHealthCenter = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'POSTO DE SAUDE',
      icon: 'medical-bag'
    }
    );
  };

  const navigateToSamu = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'SAMU',
      icon: 'ambulance'
    }
    );
  };
  const navigateToCreas = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'LABORATORIO',
      icon: 'ambulance'
    }
    );
  };

  const navigateToUrgencia = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'URGÊNCIA',
      icon: 'ambulance'
    }
    );
  };


  const navigateToFarmacia = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'FARMÁCIA',
      icon: 'ambulance'
    }
    );
  };


  const navigateToClinica = () => {
    navigation.navigate('Chart', {
      userLocation: location,
      category: 'CLÍNICA',
      icon: 'ambulance'
    }
    );
  };
  return (
    <>
      <Wrapper>
        <Container>
          <Navbar>
            <MaterialCommunityIcons name="hospital-marker" size={26} color="#FF5252" />
            <Logo>Mapa Saúde</Logo>
          </Navbar>
          <Header>
            <Description>
              <DescriptionText>Encontre</DescriptionText>
              <DescriptionText>serviços de saúde</DescriptionText>
              <DescriptionBold>próximos a você!</DescriptionBold>
            </Description>

            <Img source={ImgMap} />
          </Header>



          {!location && (
            <>
              <DescriptionText>Carregando...</DescriptionText>
            </>
          )}

          {location && (
            <>
              <OptionGroup>
                <Content>

                  <Option onPress={navigateToHospital}>
                    <OptionInfo>
                      <MaterialCommunityIcons name="hospital-building" size={22} color="#fff" />
                      <OptionText> HOSPITAIS </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>

                  <Option onPress={navigateToHealthCenter}>
                    <OptionInfo>
                      <MaterialCommunityIcons name="medical-bag" size={22} color="#fff" />
                      <OptionText> POSTOS DE SAÚDE </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>

                  <Option onPress={navigateToSamu}>
                    <OptionInfo>
                      <MaterialCommunityIcons name="ambulance" size={22} color="#fff" />
                      <OptionText> SAMU </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>


                  <Option onPress={navigateToCreas}>
                    <OptionInfo>
                      <Fontisto name="laboratory" size={22} color="#fff" />
                      <OptionText> LABORATÓRIO </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>

                  <Option onPress={navigateToUrgencia}>
                    <OptionInfo>
                      <MaterialCommunityIcons name="ambulance" size={22} color="#fff" />
                      <OptionText> URGÊNCIA </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>


                  <Option onPress={navigateToFarmacia}>
                    <OptionInfo>
                      <MaterialCommunityIcons name="pharmacy" size={22} color="#fff" />
                      <OptionText> FARMÁCIA </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>


                  <Option onPress={navigateToClinica}>
                    <OptionInfo>
                      <MaterialCommunityIcons name="warehouse" size={22} color="#fff" />
                      <OptionText> CLÍNICA </OptionText>
                    </OptionInfo>
                    <AntDesign name="arrowright" size={22} color="#fff" />
                  </Option>

                </Content>


              </OptionGroup>
            </>
          )}
        </Container>
      </Wrapper>

    </>);
};

import React from "react";

import * as Linking from 'expo-linking';

import { useRoute } from "@react-navigation/native";

import Communications from "react-native-communications";

import {
  Wrapper,
  Container,
  Navbar,
  Content,
  BadgeGroup,
  Badge,
  BadgeText,
  Title,
  Attendance,
  Card,
  CardGroup,
  CardTextBold,
  CardText,
  Call,
  CallGroup,
  CallText,
} from "./styles";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import NavigateToBack from "../../components/NavigateToBack";

export default Detail = () => {
  const route = useRoute();

  const { place } = route.params;

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <NavigateToBack />
        </Navbar>

        <Content>

          <Title>{place.nomeFantasia}</Title>
          <Attendance>{place.turnoAtendimento}</Attendance>

          <BadgeGroup>
            <Badge>
              <BadgeText>{place.categoriaUnidade}</BadgeText>
            </Badge>
            {place.temAtendimentoUrgencia === 'Sim' && <Badge>
              <BadgeText>URGÊNCIA</BadgeText>
            </Badge>}
            {place.temAtendimentoAmbulatorial === 'Sim' && <Badge>
              <BadgeText>AMBULATÓRIAL</BadgeText>
            </Badge>}
            {place.temCentroCirurgico === 'Sim' && <Badge>
              <BadgeText>CENTRO CIRÚGICO</BadgeText>
            </Badge>}
          </BadgeGroup>


          <Card>
            <CardGroup>
              <CardTextBold>Endereço</CardTextBold>
              <CardText>{`${place.logradouro}, ${place.numero} - Bairro: ${place.bairro}`}</CardText>
              <CardText>{`CEP: ${place.cep} `}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Telefone</CardTextBold>
              <CardText>{place.telefone}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Atende pelo SUS</CardTextBold>
              <CardText>{place.vinculoSus}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Esfera Administrativa</CardTextBold>
              <CardText>{place.esferaAdministrativa}</CardText>
            </CardGroup>

            <CardGroup>
              <CardTextBold>Descrição Completa</CardTextBold>
              <CardText>{place.descricaoCompleta}</CardText>
            </CardGroup>
          </Card>

          <Call onPress={() => Communications.phonecall(place.telefone, true)}>
            <CallGroup>
              <Ionicons name="ios-call" size={24} color="#fff" />
              <CallText>Entrar em contato</CallText>
            </CallGroup>

            <AntDesign name="arrowright" size={28} color="#fff" />
          </Call>

          <Call onPress={() => Linking.openURL(`maps://app?daddr=${place.lat}+${place.long}`)}>
            <CallGroup>
              <Ionicons name="ios-car" size={24} color="#fff" />
              <CallText>Como chegar</CallText>
            </CallGroup>

            <AntDesign name="arrowright" size={28} color="#fff" />
          </Call>

        </Content>
      </Container>
    </Wrapper>
  );
};

import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView`
  padding: 20px 20px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  padding-top: 20px;
  padding-bottom: 60px;
`;

export const BadgeGroup = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 0,
  }
}))`
padding-top:10px;
`;


export const Badge = styled.View`
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #FF5252;
  margin-right: 10px;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
  margin-top: 0px;
`;

export const Attendance = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

export const Card = styled.ScrollView`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
`;

export const CardGroup = styled.View`
  padding: 6px 0; 
`;

export const CardTextBold = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const CardText = styled.Text`
  color: #666;
  margin-top: 5px;
  text-transform: capitalize;
`;

export const Call = styled.TouchableOpacity`
  background: #FF5252;
  padding: 15px 20px;
  margin-top: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CallGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CallText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
  font-weight: bold;
`;

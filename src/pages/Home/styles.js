import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Container = styled.View`
  padding: 40px 20px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  align-items: center;
  color: #FF5252;
  padding: 8px 0px;
  width: 300px;
  border-radius: 20px;
`;

export const Logo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #FF5252;
  margin-left: 8px;
  font-family: 'Ubuntu_700Bold';
`;

export const Header = styled.View`
  padding: 30px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View``;

export const DescriptionText = styled.Text`
  font-size: 22px;
  color: #FF5252;
  font-family: 'Ubuntu_700Bold';

`;

export const DescriptionBold = styled.Text`
  font-size: 22px;
  color: #FF5252;
  font-family: 'Ubuntu_700Bold';

`;

export const Img = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  width: 160px;
  height: 120px;
`;

export const Content = styled.SafeAreaView`
  height: 620px;

flex:1;

`;

export const Title = styled.Text`
  font-size: 22px;
  color: #333;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

export const OptionGroup = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
padding-top:10px;
`;
export const Option = styled.TouchableOpacity`
  background: #FF5252;
  padding: 15px 15px;
  margin-top: 15px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionInfo = styled.View`
  flex-direction: row;
`;

export const OptionText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: 'Ubuntu_700Bold';
  margin-left: 10px;
`;
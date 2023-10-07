import {View, Text, StyleSheet, Switch, ScrollView} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import HeaderScreen from '../Molecules/HeaderScreen';
import Title from '../Atomes/Title';
import CostumCheckBox from '../Molecules/CostumCheckBox';
import Input from '../Molecules/Input';
interface RolesScreenProps {
  closeRolesPage: () => {};
  roleState: {};
  handleCheck: () => {};
  returnWithoutSaving: () => {};
}

const CommunitiesFilterScreen: FC<RolesScreenProps> = ({
  closeRolesPage,
  handleCheck,
  returnWithoutSaving,
  roleState,
}) => {
  return (
    <ScrollView style={styles.rolesScreenContainer}>
      <HeaderScreen
        leftIconAction={returnWithoutSaving}
        rightTItleDisables={roleState.saveDisable}
        headerTitle="Roles"
        rightText="Save"
        rightTitleAction={closeRolesPage}
      />
      <Title
        specialStyle={{
          marginTop: 30,
          textAlign: 'center',
          paddingHorizontal: 70,
        }}
        text="Select at least one of the roles you
have in the GA community."
      />

      {roleState.roles.map(el => (
        <CostumCheckBox
          checkAction={label => handleCheck(label)}
          label={el.label}
          picked={el.picked}
        />
      ))}

      <CostumCheckBox picked={roleState.other.display} label="Other" />

      {roleState.other.display ? (
        <View>
          <Input
            onChangeInput={text => handoleOtherRolesChanges(text)}
            specialStyle={{marginBottom: 80}}
            placeHolder="Add your role(s), separated by commas"
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rolesScreenContainer: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default CommunitiesFilterScreen;

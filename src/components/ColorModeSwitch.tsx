import { HStack, Switch, Text, useColorMode, Show } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="orange"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Show above="md">
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;

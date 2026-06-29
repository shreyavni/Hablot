import { useUserStore } from "@/store/userStore";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  const isAdmin = useUserStore((state) => state.isAdmin);

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={"house.fill"} drawable="ic_menu_home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Icon sf="magnifyingglass" drawable="ic_menu_search" />
        <Label>Search</Label>
      </NativeTabs.Trigger>

      {isAdmin && (
        <NativeTabs.Trigger name="create">
          <Icon sf="plus.circle.fill" drawable="ic_menu_add" />
          <Label>Add Property</Label>
        </NativeTabs.Trigger>
      )}

      <NativeTabs.Trigger name="saved">
        <Icon sf="heart.fill" drawable="ic_menu_save" />
        <Label>Saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.crop.circle" drawable="sym_def_app_icon" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

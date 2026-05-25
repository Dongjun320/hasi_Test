import { createBrowserRouter } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { WorkspaceSelectionPage } from "./components/WorkspaceSelectionPage";
import { WorkspaceLayout } from "./components/WorkspaceLayout";
import { ChannelsPage } from "./components/ChannelsPage";
import { DirectMessagesPage } from "./components/DirectMessagesPage";
import { ThreadsPage } from "./components/ThreadsPage";
import { ProfilePage } from "./components/ProfilePage";
import { SettingsPage } from "./components/SettingsPage";
import { KanbanPage } from "./components/KanbanPage";
import { CalendarPage } from "./components/CalendarPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: WorkspaceSelectionPage,
  },
  {
    path: "/workspace",
    Component: WorkspaceLayout,
    children: [
      { index: true, Component: ChannelsPage },
      { path: "channels/:channelId", Component: ChannelsPage },
      { path: "dm", Component: DirectMessagesPage },
      { path: "dm/:userId", Component: DirectMessagesPage },
      { path: "threads", Component: ThreadsPage },
      { path: "kanban", Component: KanbanPage },
      { path: "calendar", Component: CalendarPage },
      { path: "profile", Component: ProfilePage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);

import { Drawer } from "expo-router/drawer";
import "../style.css";

export default function RootLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Hermes"
                }}
            />
        </Drawer>
    );
}

import React from "react";

type AuxProps = {
    children: React.ReactNode;
}

export default function PrivateLayout(props: AuxProps) {
    return (
        <>
            {props.children}
        </>
    );
} 
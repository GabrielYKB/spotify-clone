import React from "react";
import { accessUrl } from "../config";

export default function Login() {
    return (
        <div className="py-10 text-center">
            <h1 className="front-bold mb-1 text-4xl">
                Welcome to my Spotify clone
            </h1>
            <p className="mb-5 text-text-dimmed">
                Please sign in to use the app
            </p>
            <a
                href={accessUrl}
                className="rounded-md bg-primary py-1.5 px-5 text-xl font-bold"
            >
                Sign in
            </a>
        </div>
    );
}

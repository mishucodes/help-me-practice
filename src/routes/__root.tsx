//Dependencies:
import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router';
// import {TanStackRouterDevtoolsPanel} from '@tanstack/react-router-devtools';
// import {TanStackDevtools} from '@tanstack/react-devtools';
import appCss from '../styles.css?url';
import {ThemeProvider} from "@/components/theme-provider";

//Components:
import {Header} from '#/components/shared/header/Header';
import {Footer} from '#/components/shared/footer/Footer';

//Metadata:
export const Route = createRootRoute(
    {
        head: () =>
            ({
                meta:
                    [
                        {charSet: 'utf-8'},
                        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                        {title: 'Help Me Practice'},
                        {description: "A place to practice for all the previous year exams."}
                    ],
                links:
                    [
                        {rel: 'stylesheet', href: appCss}
                    ],
            }),
        shellComponent: RootDocument,
        notFoundComponent: () => <p>WRONG PAGE</p>
    });

//Root Layout:
function RootDocument({children}: {children: React.ReactNode})
{
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>
            <body>
                <ThemeProvider defaultTheme="system" storageKey="theme">
                    <Header/>
                    <main className='w-screen p-5'>
                        {children}
                    </main>
                    <Footer/>
                </ThemeProvider>
                {/* <TanStackDevtools
                    config={{position: 'bottom-right'}}
                    plugins={[{name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel />}]}
                /> */}
                <Scripts />
            </body>
        </html>
    );
}
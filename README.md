# NxReactWorkspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Setting up workspace

### To create an Nx workspace do
```
npx create-nx-workspace
```

### To create a library:

#### React
```
nx g @nx/react:library ui-shared
```
#### Js
```
nx g @nx/js:lib utils
```

### To create a NestJS application
```
nx g @nx/nest:app my-nest-app
```

### To create a Express application
```
nx g @nx/express:app my-express-api
```

### To create a React Native application
```
nx add @nx/react-native
nx g @nx/react-native:app mobile
```

When creating applications, you can specify where the application needs to be created using --directory=`path/<app name>`. If not specified, you will be prompted to choose a path to create the app.

## Storybook
```
nx g @nx/storybook:configuration shared-app
```

### Adding story to new component
```
nx g @nx/react:component header
nx g @nx/react:stories --project=shared-app
```

### To start
```
nx storybook shared-app
```

Note: stories.tsx files will be added only within /apps folder

## Start the application

Run `npx nx serve <app name>` to start the development server. Happy coding!

## Build for production

Run `npx nx build <app name>` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

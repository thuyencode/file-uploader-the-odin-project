/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthRouteImport } from './routes/_auth/route'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const AuthSignUpLazyImport = createFileRoute('/_auth/sign-up')()
const AuthSignInLazyImport = createFileRoute('/_auth/sign-in')()

// Create/Update Routes

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthSignUpLazyRoute = AuthSignUpLazyImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => AuthRouteRoute,
} as any).lazy(() => import('./routes/_auth/sign-up.lazy').then((d) => d.Route))

const AuthSignInLazyRoute = AuthSignInLazyImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => AuthRouteRoute,
} as any).lazy(() => import('./routes/_auth/sign-in.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth/sign-in': {
      id: '/_auth/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof AuthSignInLazyImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/sign-up': {
      id: '/_auth/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof AuthSignUpLazyImport
      parentRoute: typeof AuthRouteImport
    }
  }
}

// Create and export the route tree

interface AuthRouteRouteChildren {
  AuthSignInLazyRoute: typeof AuthSignInLazyRoute
  AuthSignUpLazyRoute: typeof AuthSignUpLazyRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthSignInLazyRoute: AuthSignInLazyRoute,
  AuthSignUpLazyRoute: AuthSignUpLazyRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof AuthRouteRouteWithChildren
  '/sign-in': typeof AuthSignInLazyRoute
  '/sign-up': typeof AuthSignUpLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof AuthRouteRouteWithChildren
  '/sign-in': typeof AuthSignInLazyRoute
  '/sign-up': typeof AuthSignUpLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_auth': typeof AuthRouteRouteWithChildren
  '/_auth/sign-in': typeof AuthSignInLazyRoute
  '/_auth/sign-up': typeof AuthSignUpLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/sign-in' | '/sign-up'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/sign-in' | '/sign-up'
  id: '__root__' | '/' | '/_auth' | '/_auth/sign-in' | '/_auth/sign-up'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AuthRouteRoute: AuthRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.ts",
      "children": [
        "/",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "index.lazy.ts"
    },
    "/_auth": {
      "filePath": "_auth/route.ts",
      "children": [
        "/_auth/sign-in",
        "/_auth/sign-up"
      ]
    },
    "/_auth/sign-in": {
      "filePath": "_auth/sign-in.lazy.ts",
      "parent": "/_auth"
    },
    "/_auth/sign-up": {
      "filePath": "_auth/sign-up.lazy.ts",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */

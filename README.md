# User Dashboard

# Project Overview:
This project is a dashboard application designed to display member details who are enrolled in the platform. The application supports following features:

1. **Members List**:
    - Shows member details in a table.
    - Details included:
        - Name
        - Email
        - Available points
        - Loyalty enroll time


2. **Display member Details**:
    - Provides functionality to display the member details in a popup.

3. **Custom error page**:
    - Provides a custom error page.


# Project Screenshots:

![List page 1](/src/assets/screenshots/table.png)

![Details page](/src/assets/screenshots/details.png)

![Pagination page](/src/assets/screenshots/pagination.png)

![Mobile page 1](/src/assets/screenshots/mobile1.png)

![Mobile page 2](/src/assets/screenshots/mobile2.png)

![Error page](/src/assets/screenshots/error.png)

## Code Overview

The project is bootstrapped with Vite React App, written in TypeScript. Below is an overview of the key components and libraries used:
    
### Libraries Used:

1. **React:** For building the user interface.
2. **TypeScript:** For adding static types to JavaScript.
3. **React Query:** For data fetching.
4. **React Table:** For data table.
5. **tailwindcss:** For styling and layout.
5. **shadcn/ui:** For UI components.


### Folder structure

```plaintext
├── src
│   ├── components
│   │   ├── DataTable
│   │   │   ├── MemberTable.tsx
│   │   ├── ErrorBoundary
│   │   │   ├── ErrorBoundary.tsx
│   │   ├── MemberDetails
│   │   │   ├── MemberDetails.tsx
│   │   ├── Pagination
│   │   │   ├── MemberPagination.tsx
│   │   ├── Skeleton
│   │   │   ├── MemberTableSkeleton.tsx
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── label.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   ├── constants
│   │   ├── types
│   │   │   ├── Member.ts
│   │   ├── env.constants.ts
│   │   ├── index.ts
│   ├── containers
│   │   ├── MemberDashboard
│   │   │   ├── MemberDashboard.tsx
│   ├── hooks
│   │   ├── useMember.ts
│   │   ├── useWindowDimensions.ts
│   ├── lib
│   │   ├── apiService
│   │   │   ├── index.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
```

## How to run

Run : `npm run dev`

Build : `npm run build`


## Project checklist

- [X] Setup the base structure
- [X] Set up the Home page
- [X] Set up the API wrapper (use React query)
- [X] Integrate the API with Home page
- [X] Make the Home page dynamic, eg. pagination
- [X] Create popup for user details
- [X] Integrate the popup
- [X] Handle responsiveness
- [ ] Test cases


## Next steps

- Add filter, sorting options in table
- Add custom limit for the table
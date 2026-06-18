# Blog Application Backend API Documentation

## Base URL
- **Development**: `http://localhost:5000/api`
- **Production**: `https://your-vercel-domain.vercel.app/api`

---

## Endpoints

### BLOGS

#### 1. Create Blog
- **Method**: POST
- **Endpoint**: `/blogs`
- **Auth**: Not required
- **Request Body**:
```json
{
  "title": "string (required)",
  "slug": "string (required, unique)",
  "metaTitle": "string (required)",
  "metaDescription": "string (required)",
  "focusKeyword": "string (required)",
  "excerpt": "string (required)",
  "content": "string (required)",
  "category": "ObjectId (required)",
  "author": "string (required)",
  "tags": ["string"],
  "featuredImage": "string (required)",
  "imageAltText": "string (required)",
  "canonicalUrl": "string (optional)",
  "schemaType": "Article | BlogPosting (default: BlogPosting)",
  "robots": "string (default: 'index, follow')",
  "status": "Published | Draft (default: Draft)",
  "isFeatured": "boolean (default: false)",
  "publishedAt": "Date (auto-set if Published)"
}
```

#### 2. Get All Blogs
- **Method**: GET
- **Endpoint**: `/blogs`
- **Query Parameters**:
  - `page`: number (default: 1)
  - `limit`: number (default: 10)
  - `status`: "Published" | "Draft"
  - `category`: CategoryId
  - `search`: string (searches title, excerpt, content)
- **Response**:
```json
{
  "message": "Blogs fetched successfully",
  "blogs": [...],
  "pagination": {
    "total": number,
    "pages": number,
    "currentPage": number,
    "limit": number
  }
}
```

#### 3. Get Blog by Slug
- **Method**: GET
- **Endpoint**: `/blogs/slug/:slug`
- **Response**: Blog object with category populated

#### 4. Get Blog by ID
- **Method**: GET
- **Endpoint**: `/blogs/:id`
- **Response**: Blog object with category populated

#### 5. Get Featured Blogs
- **Method**: GET
- **Endpoint**: `/blogs/featured`
- **Response**: Array of featured published blogs (max 10)

#### 6. Get Blogs by Category
- **Method**: GET
- **Endpoint**: `/blogs/category/:categorySlug`
- **Query Parameters**:
  - `page`: number (default: 1)
  - `limit`: number (default: 10)
- **Response**: Paginated blogs for that category

#### 7. Update Blog
- **Method**: PUT
- **Endpoint**: `/blogs/:id`
- **Request Body**: Any blog fields to update
- **Response**: Updated blog object

#### 8. Delete Blog
- **Method**: DELETE
- **Endpoint**: `/blogs/:id`
- **Response**: Success message

---

### CATEGORIES

#### 1. Create Category
- **Method**: POST
- **Endpoint**: `/categories`
- **Request Body**:
```json
{
  "name": "string (required, unique)",
  "slug": "string (required, unique)",
  "description": "string (optional)"
}
```

#### 2. Get All Categories
- **Method**: GET
- **Endpoint**: `/categories`
- **Response**: Array of all categories

#### 3. Get Category by ID
- **Method**: GET
- **Endpoint**: `/categories/:id`
- **Response**: Category object

#### 4. Get Category by Slug
- **Method**: GET
- **Endpoint**: `/categories/slug/:slug`
- **Response**: Category object with blog count

#### 5. Update Category
- **Method**: PUT
- **Endpoint**: `/categories/:id`
- **Request Body**:
```json
{
  "name": "string (optional)",
  "slug": "string (optional)",
  "description": "string (optional)"
}
```

#### 6. Delete Category
- **Method**: DELETE
- **Endpoint**: `/categories/:id`
- **Restrictions**: Cannot delete category if blogs are assigned to it
- **Response**: Success message or error

---

## Error Handling

All endpoints return errors in the following format:
```json
{
  "message": "Error description",
  "status": 400,
  "timestamp": "2026-06-17T21:00:00.000Z"
}
```

### Common Status Codes:
- **200**: Success
- **201**: Created
- **400**: Bad Request / Validation Error
- **404**: Not Found
- **500**: Internal Server Error

---

## Features

### Blog Features:
- Soft publishing with status (Draft/Published)
- SEO optimization fields (meta title, description, keywords)
- Featured blogs
- View counter
- Like counter
- Categorization
- Auto-publish date tracking

### Category Features:
- Auto-count of published blogs
- Prevent deletion if blogs assigned
- Slug-based URL routing

### Data Validation:
- Required fields validation
- Unique constraint on slug
- Email validation for comments
- Reference integrity with MongoDB

---

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
PORT=5000
```

3. Run server:
```bash
npm start        # Production
npm run dev      # Development with nodemon
```

---

## Models

### Blog Schema
- title, slug, metaTitle, metaDescription
- focusKeyword, excerpt, content
- category (reference), author, tags
- featuredImage, imageAltText
- canonicalUrl, schemaType, robots
- status, isFeatured, publishedAt
- views, likes
- timestamps

### Category Schema
- name, slug, description
- blogsCount
- timestamps

### Comment Schema
- content, author, email
- blog (reference)
- status (Approved/Pending/Rejected)
- likes, timestamps

### User Schema
- name, email, password
- role (Admin/User)
- avatar, bio, isActive
- timestamps

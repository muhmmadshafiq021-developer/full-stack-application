# Complete API Reference - 20 Endpoints

## Summary
- **Total Endpoints**: 20
- **Blogs**: 8 endpoints
- **Categories**: 6 endpoints  
- **Dashboard Stats**: 6 endpoints (5 separate + 1 combined)
- **Base URL**: `http://localhost:5000/api`

---

## 📋 COMPLETE ENDPOINT LIST

### BLOGS (8 Endpoints)

| # | Method | Endpoint | Purpose |
|----|--------|----------|---------|
| 1 | POST | `/blogs` | Create new blog |
| 2 | GET | `/blogs` | Get all blogs (with filters, search, pagination) |
| 3 | GET | `/blogs/featured` | Get featured blogs only |
| 4 | GET | `/blogs/category/:categorySlug` | Get blogs by category |
| 5 | GET | `/blogs/slug/:slug` | Get blog by slug |
| 6 | GET | `/blogs/:id` | Get blog by ID |
| 7 | PUT | `/blogs/:id` | Update blog |
| 8 | DELETE | `/blogs/:id` | Delete blog |

---

### CATEGORIES (6 Endpoints)

| # | Method | Endpoint | Purpose |
|----|--------|----------|---------|
| 9 | POST | `/categories` | Create category |
| 10 | GET | `/categories` | Get all categories |
| 11 | GET | `/categories/:id` | Get category by ID |
| 12 | GET | `/categories/slug/:slug` | Get category by slug |
| 13 | PUT | `/categories/:id` | Update category |
| 14 | DELETE | `/categories/:id` | Delete category |

---

### DASHBOARD STATS (6 Endpoints)

| # | Method | Endpoint | Purpose |
|----|--------|----------|---------|
| 15 | GET | `/dashboard/blog-stats` | Blog statistics (total, published, draft, featured) |
| 16 | GET | `/dashboard/category-stats` | Category statistics (total, blogs per category) |
| 17 | GET | `/dashboard/comment-stats` | Comment statistics (total, pending, approved, rejected) |
| 18 | GET | `/dashboard/user-stats` | User statistics (total, admin, regular, active, inactive) |
| 19 | GET | `/dashboard/engagement-stats` | Engagement metrics (views, likes, top blogs) |
| 20 | GET | `/dashboard/all` | All stats combined in single response |

---

## 🔍 DETAILED ENDPOINT SPECIFICATIONS

### 1️⃣ POST `/api/blogs` - Create Blog

**Request Body:**
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
  "featuredImage": "string (required)",
  "imageAltText": "string (required)",
  "tags": ["string (optional)"],
  "canonicalUrl": "string (optional)",
  "schemaType": "Article|BlogPosting (default: BlogPosting)",
  "robots": "string (default: 'index, follow')",
  "status": "Published|Draft (default: Draft)",
  "isFeatured": "boolean (default: false)"
}
```

**Response:** 201 - Blog object created

---

### 2️⃣ GET `/api/blogs` - Get All Blogs

**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 10)
- `status`: "Published" | "Draft"
- `category`: CategoryId
- `search`: string (searches title, excerpt, content)

**Response:** 200 - Array of blogs with pagination

---

### 3️⃣ GET `/api/blogs/featured` - Featured Blogs

**Response:** 200 - Array of featured published blogs (max 10)

---

### 4️⃣ GET `/api/blogs/category/:categorySlug` - By Category

**URL Parameters:**
- `categorySlug`: string (category slug)

**Query Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 10)

**Response:** 200 - Paginated blogs for category

---

### 5️⃣ GET `/api/blogs/slug/:slug` - By Slug

**URL Parameters:**
- `slug`: string (blog slug)

**Response:** 200 - Blog object (increments view count)

---

### 6️⃣ GET `/api/blogs/:id` - By ID

**URL Parameters:**
- `id`: ObjectId (blog ID)

**Response:** 200 - Blog object

---

### 7️⃣ PUT `/api/blogs/:id` - Update Blog

**URL Parameters:**
- `id`: ObjectId (blog ID)

**Request Body:** (Any fields to update)
```json
{
  "title": "string (optional)",
  "status": "Published|Draft (optional)",
  "isFeatured": "boolean (optional)"
}
```

**Response:** 200 - Updated blog object

---

### 8️⃣ DELETE `/api/blogs/:id` - Delete Blog

**URL Parameters:**
- `id`: ObjectId (blog ID)

**Response:** 200 - Success message

---

### 9️⃣ POST `/api/categories` - Create Category

**Request Body:**
```json
{
  "name": "string (required, unique)",
  "slug": "string (required, unique)",
  "description": "string (optional)"
}
```

**Response:** 201 - Category object created

---

### 🔟 GET `/api/categories` - Get All Categories

**Response:** 200 - Array of all categories

---

### 1️⃣1️⃣ GET `/api/categories/:id` - By ID

**URL Parameters:**
- `id`: ObjectId (category ID)

**Response:** 200 - Category object

---

### 1️⃣2️⃣ GET `/api/categories/slug/:slug` - By Slug

**URL Parameters:**
- `slug`: string (category slug)

**Response:** 200 - Category object with blog count

---

### 1️⃣3️⃣ PUT `/api/categories/:id` - Update Category

**URL Parameters:**
- `id`: ObjectId (category ID)

**Request Body:**
```json
{
  "name": "string (optional, unique)",
  "slug": "string (optional, unique)",
  "description": "string (optional)"
}
```

**Response:** 200 - Updated category object

---

### 1️⃣4️⃣ DELETE `/api/categories/:id` - Delete Category

**URL Parameters:**
- `id`: ObjectId (category ID)

**Restrictions:** Cannot delete if blogs exist

**Response:** 200 - Success message

---

### 1️⃣5️⃣ GET `/api/dashboard/blog-stats` - Blog Stats

**Response:**
```json
{
  "stats": {
    "total": number,
    "published": number,
    "draft": number,
    "featured": number
  }
}
```

---

### 1️⃣6️⃣ GET `/api/dashboard/category-stats` - Category Stats

**Response:**
```json
{
  "stats": {
    "total": number,
    "categoriesWithBlogs": [
      {
        "_id": "ObjectId",
        "name": "string",
        "blogCount": number
      }
    ]
  }
}
```

---

### 1️⃣7️⃣ GET `/api/dashboard/comment-stats` - Comment Stats

**Response:**
```json
{
  "stats": {
    "total": number,
    "pending": number,
    "approved": number,
    "rejected": number
  }
}
```

---

### 1️⃣8️⃣ GET `/api/dashboard/user-stats` - User Stats

**Response:**
```json
{
  "stats": {
    "total": number,
    "admin": number,
    "regular": number,
    "active": number,
    "inactive": number
  }
}
```

---

### 1️⃣9️⃣ GET `/api/dashboard/engagement-stats` - Engagement Stats

**Response:**
```json
{
  "stats": {
    "totalViews": number,
    "totalLikes": number,
    "totalCommentLikes": number,
    "mostViewedBlogs": [...],
    "mostLikedBlogs": [...]
  }
}
```

---

### 2️⃣0️⃣ GET `/api/dashboard/all` - All Stats Combined

**Response:**
```json
{
  "stats": {
    "blogs": { "total", "published", "draft", "featured" },
    "categories": { "total" },
    "comments": { "total", "pending" },
    "users": { "total", "admin" },
    "engagement": { "totalViews", "totalLikes" }
  }
}
```

---

## 🧪 Quick Insomnia Testing Order

1. Create Category (POST `/categories`)
2. Create Blog (POST `/blogs` - use Category ID)
3. Get All Categories (GET `/categories`)
4. Get All Blogs (GET `/blogs`)
5. Get Blog Stats (GET `/dashboard/blog-stats`)
6. Get Engagement Stats (GET `/dashboard/engagement-stats`)
7. Get All Dashboard Stats (GET `/dashboard/all`)
8. Update Blog (PUT `/blogs/:id`)
9. Delete Blog (DELETE `/blogs/:id`)
10. Delete Category (DELETE `/categories/:id`)

---

## ✅ Features Across All 20 Endpoints

✅ Full CRUD operations (Create, Read, Update, Delete)
✅ Search & filtering capabilities
✅ Pagination support
✅ Statistics and analytics
✅ Relationship management (blogs to categories)
✅ Data validation on all endpoints
✅ Error handling with proper status codes
✅ Timestamp tracking on all data
✅ View/Like counters
✅ Status management (Published/Draft)

---

## 📊 Data Models Supported

- **Blog**: Complete content management with SEO
- **Category**: Content organization and counting
- **Comment**: Discussion management with moderation
- **User**: User management with roles

---

## 🚀 Production Ready

✅ MongoDB integration
✅ Mongoose ODM
✅ Express.js API
✅ Vercel serverless support
✅ CORS enabled
✅ Error middleware
✅ Input validation
✅ All 20 endpoints tested and ready

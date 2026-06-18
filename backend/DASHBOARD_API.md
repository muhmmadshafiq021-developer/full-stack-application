# Dashboard Statistics API Documentation

## Base URL
`http://localhost:5000/api/dashboard`

---

## 6 Dashboard Endpoints

### 1. **GET** `/api/dashboard/blog-stats` - Blog Statistics
**No Parameters Needed**

**Response:**
```json
{
  "message": "Blog statistics fetched successfully",
  "stats": {
    "total": 120,
    "published": 95,
    "draft": 25,
    "featured": 12
  }
}
```

---

### 2. **GET** `/api/dashboard/category-stats` - Category Statistics
**No Parameters Needed**

**Response:**
```json
{
  "message": "Category statistics fetched successfully",
  "stats": {
    "total": 12,
    "categoriesWithBlogs": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "name": "React",
        "blogCount": 15
      },
      {
        "_id": "507f1f77bcf86cd799439012",
        "name": "JavaScript",
        "blogCount": 22
      }
    ]
  }
}
```

---

### 3. **GET** `/api/dashboard/comment-stats` - Comment Statistics
**No Parameters Needed**

**Response:**
```json
{
  "message": "Comment statistics fetched successfully",
  "stats": {
    "total": 348,
    "pending": 45,
    "approved": 303,
    "rejected": 0
  }
}
```

---

### 4. **GET** `/api/dashboard/user-stats` - User Statistics
**No Parameters Needed**

**Response:**
```json
{
  "message": "User statistics fetched successfully",
  "stats": {
    "total": 56,
    "admin": 5,
    "regular": 51,
    "active": 54,
    "inactive": 2
  }
}
```

---

### 5. **GET** `/api/dashboard/engagement-stats` - Engagement Statistics
**No Parameters Needed**

**Response:**
```json
{
  "message": "Engagement statistics fetched successfully",
  "stats": {
    "totalViews": 5420,
    "totalLikes": 890,
    "totalCommentLikes": 156,
    "mostViewedBlogs": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "title": "Getting Started with React",
        "views": 450,
        "likes": 120
      },
      {
        "_id": "507f1f77bcf86cd799439012",
        "title": "JavaScript Tips",
        "views": 380,
        "likes": 95
      }
    ],
    "mostLikedBlogs": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "title": "Getting Started with React",
        "likes": 120,
        "views": 450
      },
      {
        "_id": "507f1f77bcf86cd799439013",
        "title": "CSS Tricks",
        "likes": 110,
        "views": 320
      }
    ]
  }
}
```

---

### 6. **GET** `/api/dashboard/all` - All Dashboard Statistics Combined
**No Parameters Needed**

**Response:**
```json
{
  "message": "Dashboard statistics fetched successfully",
  "stats": {
    "blogs": {
      "total": 120,
      "published": 95,
      "draft": 25,
      "featured": 12
    },
    "categories": {
      "total": 12
    },
    "comments": {
      "total": 348,
      "pending": 45
    },
    "users": {
      "total": 56,
      "admin": 5
    },
    "engagement": {
      "totalViews": 5420,
      "totalLikes": 890
    }
  }
}
```

---

## Inomnia Testing Examples

### Test 1: Get Blog Stats
```
GET http://localhost:5000/api/dashboard/blog-stats
```

### Test 2: Get Category Stats
```
GET http://localhost:5000/api/dashboard/category-stats
```

### Test 3: Get Comment Stats
```
GET http://localhost:5000/api/dashboard/comment-stats
```

### Test 4: Get User Stats
```
GET http://localhost:5000/api/dashboard/user-stats
```

### Test 5: Get Engagement Stats
```
GET http://localhost:5000/api/dashboard/engagement-stats
```

### Test 6: Get All Dashboard Stats
```
GET http://localhost:5000/api/dashboard/all
```

---

## Features

✅ **Blog Stats**: Total, Published, Draft, Featured count
✅ **Category Stats**: Total categories with blog count per category
✅ **Comment Stats**: Total, Pending, Approved, Rejected comments
✅ **User Stats**: Total users, Admin, Regular, Active, Inactive counts
✅ **Engagement Stats**: Total views, likes, top viewed & liked blogs
✅ **Combined Stats**: All stats in single endpoint for dashboard

---

## Use Cases

- Admin dashboard overview
- Quick statistics display
- Performance monitoring
- Content management metrics
- User analytics
- Engagement tracking

---

## Notes

- All endpoints return 200 status on success
- No authentication required for now
- Zero count returns 0 (if no data exists)
- Most viewed/liked blogs limited to top 5
- All GET requests (no body needed)

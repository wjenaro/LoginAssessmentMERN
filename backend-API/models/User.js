const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true, // Ensures that the email is unique across users
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, // Ensures that the username is unique across users
      trim: true,
      minlength: 3, // Minimum length for username
      maxlength: 50, // Maximum length for username
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum length for password
    },
  });
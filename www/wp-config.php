<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'megapode_website');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'toor');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2S6A>@5Kw]dRGYIwj$~4jc)jr5m7?x:E[V.T@.5g#e`uU<zR1^*lHGvzA@[+fyvn');
define('SECURE_AUTH_KEY',  '_^yx*cHz,T5Ngi$:C=}U2b6t&3g K}zdyz1 O5*#D=$g8`h-mvZur=SMM=)%}]SP');
define('LOGGED_IN_KEY',    '+Q8slgQCcKXxg}~%hzJT8~&b|jK;?(tTC+&[KM48q]Qdu}R|n=NZffnic,7?>QGj');
define('NONCE_KEY',        'gdWaD~die)+vAblAXAy3%;,Q-gjBZQ)}_t9fe+XM{~U5ZK9*t-{JK:w#Vm%|wz}0');
define('AUTH_SALT',        '5C~1pq}^6m&8Ti}v%$vx 3OBPWXFS<5:5tvO{+mi!r7t,xEU>7Km0N39L+X6kn4=');
define('SECURE_AUTH_SALT', 'gYnjtP%pf@f7&Ge8F$:1JKK#{]{c:/^43A)z8Qmc[g?hu_53@z}ui$c0ub0) b9P');
define('LOGGED_IN_SALT',   'mVP4ADi9YM-:U % G}6?Lt3-W|>JD))n0i!4.1x1Dh0CWk0NK@kP%_  I)vT0/u ');
define('NONCE_SALT',       ';ibCdHY#2-vNrc b5wb`wUqkokn]1+DA8<vxNH`80Q~E@nEGRJnM/@]OU>vlN>qI');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

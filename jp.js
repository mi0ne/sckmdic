/*
 * Bunny Japanese UI
 * Version: 1.0.0
 *
 * 日本語化専用プラグイン。
 * Discord/Bunny のUI文字列を、React要素が描画される直前に
 * 安全な辞書方式で日本語へ置換します。
 *
 * 重要:
 * - ユーザーが送信した文章を翻訳する機能ではありません。
 * - 辞書に完全一致するUI文字列だけを置換します。
 * - stop() でパッチを解除できます。
 */

const translations = {"This action cannot be undone.":"この操作は取り消せません。","Search for a conversation":"会話を検索","No Internet Connection":"インターネット接続がありません","Enable Developer Mode":"開発者モードを有効にする","Announcement Channels":"アナウンスチャンネル","Load from custom url":"カスタムURLから読み込む","Something went wrong":"問題が発生しました","Use External Emojis":"外部絵文字を使用","Developer Settings":"開発者設定","Use Voice Activity":"音声アクティビティを使用","Copy Message Link":"メッセージリンクをコピー","Search in Channel":"チャンネル内を検索","Chat Font Scaling":"チャットフォントサイズ","Check for Updates":"更新を確認","Billing Settings":"請求設定","Channel Settings":"チャンネル設定","Mention Everyone":"全員へのメンション","Disabled Plugins":"無効なプラグイン","Authorized Apps":"認証済みアプリ","Server Settings":"サーバー設定","Change Password":"パスワードを変更","Direct Messages":"ダイレクトメッセージ","Search Messages":"メッセージを検索","Jump to Present":"現在位置へ移動","Create Category":"カテゴリを作成","Create Group DM":"グループDMを作成","Server Boosting":"サーバーブースト","Message Content":"メッセージ内容","Pinned Messages":"ピン留めされたメッセージ","Manage Channels":"チャンネルを管理","Manage Messages":"メッセージを管理","Manage Webhooks":"ウェブフックを管理","Plugin Settings":"プラグイン設定","Enabled Plugins":"有効なプラグイン","Uninstall Theme":"テーマをアンインストール","Gift Inventory":"ギフトインベントリ","Delete Account":"アカウントを削除","Developer Mode":"開発者モード","Do Not Disturb":"取り込み中","Mark as Unread":"未読にする","Delete Message":"メッセージを削除","Create Channel":"チャンネルを作成","Voice Channels":"ボイスチャンネル","Stage Channels":"ステージチャンネル","Forum Channels":"フォーラムチャンネル","Server Profile":"サーバープロフィール","Type a message":"メッセージを入力","Plugin Browser":"プラグインブラウザ","Install Plugin":"プラグインをインストール","Uninstall Font":"フォントをアンインストール","Nitro Gifting":"Nitroギフト","Notifications":"通知","Accessibility":"アクセシビリティ","Voice & Video":"音声・ビデオ","Text & Images":"テキスト・画像","Streamer Mode":"配信者モード","Subscriptions":"サブスクリプション","User Settings":"ユーザー設定","Invite People":"メンバーを招待","Create Invite":"招待を作成","Create Server":"サーバーを作成","Delete Server":"サーバーを削除","Text Channels":"テキストチャンネル","Upload a File":"ファイルをアップロード","Voice Message":"ボイスメッセージ","Administrator":"管理者","Manage Server":"サーバーを管理","Read Messages":"メッセージを読む","Send Messages":"メッセージを送信","Add Reactions":"リアクションを追加","Theme Browser":"テーマブラウザ","Install Theme":"テーマをインストール","Are you sure?":"本当によろしいですか？","Scan QR Code":"QRコードをスキャン","Server Boost":"サーバーブースト","Edit Profile":"プロフィールを編集","Mark as Read":"既読にする","Copy User ID":"ユーザーIDをコピー","Add Reaction":"リアクションを追加","Edit Message":"メッセージを編集","New Messages":"新しいメッセージ","Leave Server":"サーバーから脱退","Integrations":"連携","Safety Setup":"安全設定","Start Thread":"スレッドを開始","Share Screen":"画面共有","Stop Sharing":"共有を停止","Manage Roles":"ロールを管理","Kick Members":"メンバーをキック","Attach Files":"ファイルを添付","Font Browser":"フォントブラウザ","Install Font":"フォントをインストール","Connections":"接続","New Message":"新しいメッセージ","Leave Group":"グループから退出","Join Server":"サーバーに参加","Permissions":"権限","Replying to":"返信先","View Thread":"スレッドを見る","Start Video":"ビデオを開始","Leave Voice":"ボイスチャンネルから退出","Ban Members":"メンバーをBAN","Embed Links":"リンクを埋め込む","Description":"説明","Apply Theme":"テーマを適用","Reset Theme":"テーマをリセット","Appearance":"外観","My Account":"マイアカウント","Add Friend":"フレンドを追加","Leave Call":"通話から退出","Moderation":"モデレーション","Onboarding":"オンボーディング","Attachment":"添付ファイル","Soundboard":"サウンドボード","No Results":"結果がありません","Voice Call":"音声通話","Video Call":"ビデオ通話","Stop Video":"ビデオを停止","Join Voice":"ボイスチャンネルに参加","Animations":"アニメーション","Repository":"リポジトリ","Apply Font":"フォントを適用","Get Nitro":"Nitroを入手","Developer":"開発者","Bunny URL":"Bunny URL","Safe Mode":"セーフモード","Invisible":"オフライン","Copy Link":"リンクをコピー","Load More":"さらに読み込む","View More":"もっと見る","Show More":"もっと見る","Show Less":"閉じる","Audit Log":"監査ログ","Community":"コミュニティ","Vibration":"バイブレーション","Font Size":"フォントサイズ","Moderator":"モデレーター","Uninstall":"アンインストール","Installed":"インストール済み","Available":"利用可能","Try Again":"もう一度試す","Settings":"設定","Security":"セキュリティ","Language":"言語","Keybinds":"キーバインド","Advanced":"詳細設定","Profiles":"プロフィール","Discover":"探索","Mentions":"メンション","Continue":"続行","Disabled":"無効","Category":"カテゴリ","Overview":"概要","Stickers":"スタンプ","Messages":"メッセージ","Unfollow":"フォロー解除","Slowmode":"低速モード","Undeafen":"スピーカーミュート解除","Everyone":"@everyone","Plugins":"プラグイン","General":"一般","Privacy":"プライバシー","Account":"アカウント","Devices":"デバイス","Overlay":"オーバーレイ","Billing":"請求","Log Out":"ログアウト","Restart":"再起動","Friends":"フレンド","Servers":"サーバー","Pending":"保留中","Unblock":"ブロック解除","Forward":"転送","Confirm":"確認","Disable":"無効化","Enabled":"有効","Sending":"送信中…","See All":"すべて表示","Copy ID":"IDをコピー","Channel":"チャンネル","Invites":"招待","Members":"メンバー","Message":"メッセージ","Gallery":"ギャラリー","Sticker":"スタンプ","Threads":"スレッド","Go Live":"配信する","Connect":"接続","Version":"バージョン","Warning":"警告","Success":"成功","Loading":"読み込み中…","Unknown":"不明","Themes":"テーマ","Quests":"クエスト","Reload":"再読み込み","Online":"オンライン","Search":"検索","Unread":"未読","Unmute":"ミュート解除","Report":"報告","Delete":"削除","Cancel":"キャンセル","Enable":"有効化","Invite":"招待","Create":"作成","Emojis":"絵文字","Attach":"添付","Upload":"アップロード","Camera":"カメラ","Thread":"スレッド","Follow":"フォロー","Pinned":"ピン留め済み","Deafen":"スピーカーミュート","Sounds":"サウンド","AMOLED":"AMOLED","System":"システム","Stream":"配信","Plugin":"プラグイン","Update":"更新","Source":"ソース","Author":"作者","Failed":"失敗","Clips":"クリップ","Bunny":"Bunny","Fonts":"フォント","Nitro":"Nitro","Inbox":"受信トレイ","Block":"ブロック","Reply":"返信","Unpin":"ピン留めを解除","React":"リアクション","Close":"閉じる","Apply":"適用","Reset":"リセット","Share":"共有","Roles":"ロール","Emoji":"絵文字","Sound":"サウンド","Theme":"テーマ","Light":"ライト","Owner":"所有者","Speak":"発言","Error":"エラー","Retry":"再試行","Home":"ホーム","Shop":"ショップ","Idle":"退席中","Mute":"ミュート","Copy":"コピー","Edit":"編集","More":"その他","Save":"保存","Done":"完了","Back":"戻る","Next":"次へ","Open":"開く","Send":"送信","Jump":"ジャンプ","Join":"参加","Bans":"BAN","Dark":"ダーク","Font":"フォント","Zoom":"ズーム","Here":"@here","Pin":"ピン留め","Yes":"はい","Off":"オフ","GIF":"GIF","No":"いいえ","OK":"OK","On":"オン"};

const exact = (value) =>
    typeof value === "string" && Object.prototype.hasOwnProperty.call(translations, value)
        ? translations[value]
        : value;

const replaceNode = (node) => {
    if (typeof node === "string") return exact(node);
    if (Array.isArray(node)) return node.map(replaceNode);
    if (!node || typeof node !== "object") return node;

    // React elements are treated as immutable-ish objects; clone only props.
    if (node.props && typeof node.props === "object") {
        const props = { ...node.props };

        if (typeof props.children === "string") {
            props.children = exact(props.children);
        } else if (Array.isArray(props.children)) {
            props.children = props.children.map(replaceNode);
        }

        // Accessibility/UI attributes. Exact-match only.
        for (const key of ["accessibilityLabel", "accessibilityHint", "placeholder", "title", "label"]) {
            if (typeof props[key] === "string") props[key] = exact(props[key]);
        }

        return { ...node, props };
    }

    return node;
};

export default {
    name: "Bunny Japanese UI",
    description: "Discord/BunnyのUIを日本語化します。",
    authors: [{
        name: "ChatGPT",
        id: "000000000000000000"
    }],
    version: "1.0.0",

    start() {
        const v = globalThis.vendetta;
        if (!v || !v.common || !v.common.React || !v.patcher) {
            throw new Error("Bunny Japanese UI: Vendetta compatibility API is unavailable.");
        }

        const React = v.common.React;
        if (!React || typeof React.createElement !== "function") {
            throw new Error("Bunny Japanese UI: React.createElement was not found.");
        }

        this._unpatch = v.patcher.before(React, "createElement", (args) => {
            try {
                if (!args || args.length < 2) return args;

                // Patch the props object before React creates the element.
                const props = args[1];
                if (!props || typeof props !== "object") return args;

                const next = { ...props };

                if (typeof next.children === "string") {
                    next.children = exact(next.children);
                } else if (Array.isArray(next.children)) {
                    next.children = next.children.map(replaceNode);
                }

                for (const key of ["accessibilityLabel", "accessibilityHint", "placeholder", "title", "label"]) {
                    if (typeof next[key] === "string") next[key] = exact(next[key]);
                }

                args[1] = next;
            } catch (_) {}

            return args;
        });
    },

    stop() {
        try {
            if (this._unpatch) this._unpatch();
        } catch (_) {}
        this._unpatch = null;
    }
};

/* =========================
   CCT English 4択 Quiz
========================= */

const STORAGE_KEY = "cctEnglishTrainer.words.v1";
const STATS_KEY = "cctEnglishTrainer.stats.v1";
const AUTO_BACKUP_KEY = "cctEnglishTrainer.autoBackup.v2";
const BACKUP_VERSION = 3;
const MASTER_STREAK = 3;

const defaultWords = [
  {
    "english": "security",
    "japanese": "セキュリティ",
    "pronounce": "",
    "category": "Security Basics",
    "example": "security is important in security basics.",
    "memo": "情報やシステムを守るための基本概念。"
  },
  {
    "english": "information security",
    "japanese": "情報セキュリティ",
    "pronounce": "",
    "category": "Security Basics",
    "example": "information security is important in security basics.",
    "memo": "情報の機密性・完全性・可用性を守る考え方。"
  },
  {
    "english": "cybersecurity",
    "japanese": "サイバーセキュリティ",
    "pronounce": "",
    "category": "Security Basics",
    "example": "cybersecurity is important in security basics.",
    "memo": "ネットワークやシステムをサイバー攻撃から守ること。"
  },
  {
    "english": "asset",
    "japanese": "資産",
    "pronounce": "",
    "category": "Security Basics",
    "example": "asset is important in security basics.",
    "memo": "守るべき情報・機器・人・サービスなど。"
  },
  {
    "english": "threat",
    "japanese": "脅威",
    "pronounce": "",
    "category": "Security Basics",
    "example": "threat is important in security basics.",
    "memo": "損害を起こす可能性のある原因。"
  },
  {
    "english": "vulnerability",
    "japanese": "脆弱性",
    "pronounce": "",
    "category": "Security Basics",
    "example": "vulnerability is important in security basics.",
    "memo": "攻撃や事故に利用される弱点。"
  },
  {
    "english": "risk",
    "japanese": "リスク",
    "pronounce": "",
    "category": "Security Basics",
    "example": "risk is important in security basics.",
    "memo": "損害が発生する可能性と影響の組み合わせ。"
  },
  {
    "english": "control",
    "japanese": "管理策",
    "pronounce": "",
    "category": "Security Basics",
    "example": "control is important in security basics.",
    "memo": "リスクを下げるための対策。"
  },
  {
    "english": "safeguard",
    "japanese": "保護対策",
    "pronounce": "",
    "category": "Security Basics",
    "example": "safeguard is important in security basics.",
    "memo": "資産を守るための仕組みや手段。"
  },
  {
    "english": "countermeasure",
    "japanese": "対抗策",
    "pronounce": "",
    "category": "Security Basics",
    "example": "countermeasure is important in security basics.",
    "memo": "脅威や攻撃に対して行う防御策。"
  },
  {
    "english": "confidentiality",
    "japanese": "機密性",
    "pronounce": "",
    "category": "Security Basics",
    "example": "confidentiality is important in security basics.",
    "memo": "許可された人だけが情報を見られる状態。"
  },
  {
    "english": "integrity",
    "japanese": "完全性",
    "pronounce": "",
    "category": "Security Basics",
    "example": "integrity is important in security basics.",
    "memo": "情報が正確で改ざんされていない状態。"
  },
  {
    "english": "availability",
    "japanese": "可用性",
    "pronounce": "",
    "category": "Security Basics",
    "example": "availability is important in security basics.",
    "memo": "必要なときにシステムや情報を使える状態。"
  },
  {
    "english": "privacy",
    "japanese": "プライバシー",
    "pronounce": "",
    "category": "Security Basics",
    "example": "privacy is important in security basics.",
    "memo": "個人に関する情報を適切に扱う考え方。"
  },
  {
    "english": "accountability",
    "japanese": "責任追跡性",
    "pronounce": "",
    "category": "Security Basics",
    "example": "accountability is important in security basics.",
    "memo": "誰が何をしたか追跡できること。"
  },
  {
    "english": "non-repudiation",
    "japanese": "否認防止",
    "pronounce": "",
    "category": "Security Basics",
    "example": "non-repudiation is important in security basics.",
    "memo": "後から行為を否定できないようにする仕組み。"
  },
  {
    "english": "baseline",
    "japanese": "ベースライン",
    "pronounce": "",
    "category": "Security Basics",
    "example": "baseline is important in security basics.",
    "memo": "最低限守るべき標準設定や基準。"
  },
  {
    "english": "hardening",
    "japanese": "堅牢化",
    "pronounce": "",
    "category": "Security Basics",
    "example": "hardening is important in security basics.",
    "memo": "不要な機能を止めて安全性を高めること。"
  },
  {
    "english": "exposure",
    "japanese": "露出",
    "pronounce": "",
    "category": "Security Basics",
    "example": "exposure is important in security basics.",
    "memo": "攻撃者から見える状態や範囲。"
  },
  {
    "english": "impact",
    "japanese": "影響",
    "pronounce": "",
    "category": "Security Basics",
    "example": "impact is important in security basics.",
    "memo": "事故や攻撃が起きたときの被害の大きさ。"
  },
  {
    "english": "likelihood",
    "japanese": "発生可能性",
    "pronounce": "",
    "category": "Security Basics",
    "example": "likelihood is important in security basics.",
    "memo": "リスクが実際に起きる可能性。"
  },
  {
    "english": "residual risk",
    "japanese": "残留リスク",
    "pronounce": "",
    "category": "Security Basics",
    "example": "residual risk is important in security basics.",
    "memo": "対策後にも残るリスク。"
  },
  {
    "english": "defense in depth",
    "japanese": "多層防御",
    "pronounce": "",
    "category": "Security Basics",
    "example": "defense in depth is important in security basics.",
    "memo": "複数の防御策を重ねて守る考え方。"
  },
  {
    "english": "security awareness",
    "japanese": "セキュリティ意識",
    "pronounce": "",
    "category": "Security Basics",
    "example": "security awareness is important in security basics.",
    "memo": "利用者が安全に行動するための意識。"
  },
  {
    "english": "security training",
    "japanese": "セキュリティ教育",
    "pronounce": "",
    "category": "Security Basics",
    "example": "security training is important in security basics.",
    "memo": "安全な行動や対策を学ぶための教育。"
  },
  {
    "english": "risk management",
    "japanese": "リスク管理",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk management is important in risk management.",
    "memo": "リスクを特定・評価・対応する活動。"
  },
  {
    "english": "risk assessment",
    "japanese": "リスクアセスメント",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk assessment is important in risk management.",
    "memo": "リスクの大きさを評価すること。"
  },
  {
    "english": "risk analysis",
    "japanese": "リスク分析",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk analysis is important in risk management.",
    "memo": "脅威・脆弱性・影響を分析すること。"
  },
  {
    "english": "risk treatment",
    "japanese": "リスク対応",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk treatment is important in risk management.",
    "memo": "リスクに対して対策を決めること。"
  },
  {
    "english": "risk acceptance",
    "japanese": "リスク受容",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk acceptance is important in risk management.",
    "memo": "リスクを理解した上で受け入れること。"
  },
  {
    "english": "risk avoidance",
    "japanese": "リスク回避",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk avoidance is important in risk management.",
    "memo": "リスクの原因となる活動をやめること。"
  },
  {
    "english": "risk mitigation",
    "japanese": "リスク低減",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk mitigation is important in risk management.",
    "memo": "対策によってリスクを下げること。"
  },
  {
    "english": "risk transfer",
    "japanese": "リスク移転",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk transfer is important in risk management.",
    "memo": "保険や外部委託でリスクを移すこと。"
  },
  {
    "english": "inherent risk",
    "japanese": "固有リスク",
    "pronounce": "",
    "category": "Risk Management",
    "example": "inherent risk is important in risk management.",
    "memo": "対策をする前のリスク。"
  },
  {
    "english": "risk register",
    "japanese": "リスク登録簿",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk register is important in risk management.",
    "memo": "リスクの一覧と対応状況を管理する表。"
  },
  {
    "english": "business impact analysis",
    "japanese": "事業影響度分析",
    "pronounce": "",
    "category": "Risk Management",
    "example": "business impact analysis is important in risk management.",
    "memo": "業務停止時の影響を分析すること。"
  },
  {
    "english": "recovery time objective",
    "japanese": "目標復旧時間",
    "pronounce": "",
    "category": "Risk Management",
    "example": "recovery time objective is important in risk management.",
    "memo": "RTO。どれくらいで復旧するかの目標。"
  },
  {
    "english": "recovery point objective",
    "japanese": "目標復旧時点",
    "pronounce": "",
    "category": "Risk Management",
    "example": "recovery point objective is important in risk management.",
    "memo": "RPO。どの時点までデータを戻すかの目標。"
  },
  {
    "english": "single point of failure",
    "japanese": "単一障害点",
    "pronounce": "",
    "category": "Risk Management",
    "example": "single point of failure is important in risk management.",
    "memo": "そこが壊れると全体が止まる箇所。"
  },
  {
    "english": "probability",
    "japanese": "確率",
    "pronounce": "",
    "category": "Risk Management",
    "example": "probability is important in risk management.",
    "memo": "リスクが発生する可能性。"
  },
  {
    "english": "severity",
    "japanese": "重大度",
    "pronounce": "",
    "category": "Risk Management",
    "example": "severity is important in risk management.",
    "memo": "被害や影響の大きさ。"
  },
  {
    "english": "qualitative assessment",
    "japanese": "定性的評価",
    "pronounce": "",
    "category": "Risk Management",
    "example": "qualitative assessment is important in risk management.",
    "memo": "高・中・低などで評価する方法。"
  },
  {
    "english": "quantitative assessment",
    "japanese": "定量的評価",
    "pronounce": "",
    "category": "Risk Management",
    "example": "quantitative assessment is important in risk management.",
    "memo": "金額や数値で評価する方法。"
  },
  {
    "english": "annualized loss expectancy",
    "japanese": "年間予想損失額",
    "pronounce": "",
    "category": "Risk Management",
    "example": "annualized loss expectancy is important in risk management.",
    "memo": "ALE。年間で見込まれる損失額。"
  },
  {
    "english": "asset value",
    "japanese": "資産価値",
    "pronounce": "",
    "category": "Risk Management",
    "example": "asset value is important in risk management.",
    "memo": "対象資産の重要度や金銭的価値。"
  },
  {
    "english": "threat actor",
    "japanese": "脅威主体",
    "pronounce": "",
    "category": "Risk Management",
    "example": "threat actor is important in risk management.",
    "memo": "攻撃や悪用を行う人や組織。"
  },
  {
    "english": "attack surface",
    "japanese": "攻撃対象領域",
    "pronounce": "",
    "category": "Risk Management",
    "example": "attack surface is important in risk management.",
    "memo": "攻撃される可能性のある範囲。"
  },
  {
    "english": "risk appetite",
    "japanese": "リスク選好",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk appetite is important in risk management.",
    "memo": "組織が許容できるリスクの考え方。"
  },
  {
    "english": "risk tolerance",
    "japanese": "リスク許容度",
    "pronounce": "",
    "category": "Risk Management",
    "example": "risk tolerance is important in risk management.",
    "memo": "具体的に許容できるリスクの範囲。"
  },
  {
    "english": "third-party risk",
    "japanese": "第三者リスク",
    "pronounce": "",
    "category": "Risk Management",
    "example": "third-party risk is important in risk management.",
    "memo": "委託先や外部サービスに関するリスク。"
  },
  {
    "english": "identity",
    "japanese": "アイデンティティ",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "identity is important in identity and access.",
    "memo": "利用者やシステムを識別する情報。"
  },
  {
    "english": "account",
    "japanese": "アカウント",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "account is important in identity and access.",
    "memo": "システムを利用するための利用者情報。"
  },
  {
    "english": "username",
    "japanese": "ユーザー名",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "username is important in identity and access.",
    "memo": "利用者を識別する名前。"
  },
  {
    "english": "password",
    "japanese": "パスワード",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "password is important in identity and access.",
    "memo": "本人確認に使う秘密の文字列。"
  },
  {
    "english": "passphrase",
    "japanese": "パスフレーズ",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "passphrase is important in identity and access.",
    "memo": "複数の単語などで作る長い認証情報。"
  },
  {
    "english": "authentication",
    "japanese": "認証",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "authentication is important in identity and access.",
    "memo": "本人であることを確認すること。"
  },
  {
    "english": "authorization",
    "japanese": "認可",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "authorization is important in identity and access.",
    "memo": "利用者に権限を与えること。"
  },
  {
    "english": "accounting",
    "japanese": "アカウンティング",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "accounting is important in identity and access.",
    "memo": "利用状況を記録・追跡すること。"
  },
  {
    "english": "multi-factor authentication",
    "japanese": "多要素認証",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "multi-factor authentication is important in identity and access.",
    "memo": "複数の要素で本人確認すること。"
  },
  {
    "english": "single sign-on",
    "japanese": "シングルサインオン",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "single sign-on is important in identity and access.",
    "memo": "一度の認証で複数サービスを使える仕組み。"
  },
  {
    "english": "federation",
    "japanese": "フェデレーション",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "federation is important in identity and access.",
    "memo": "異なる組織やサービス間で認証情報を連携すること。"
  },
  {
    "english": "directory service",
    "japanese": "ディレクトリサービス",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "directory service is important in identity and access.",
    "memo": "ユーザーや権限情報を集中管理する仕組み。"
  },
  {
    "english": "active directory",
    "japanese": "Active Directory",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "active directory is important in identity and access.",
    "memo": "Microsoftの代表的なディレクトリサービス。"
  },
  {
    "english": "ldap",
    "japanese": "LDAP",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "ldap is important in identity and access.",
    "memo": "ディレクトリ情報にアクセスするためのプロトコル。"
  },
  {
    "english": "kerberos",
    "japanese": "Kerberos",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "kerberos is important in identity and access.",
    "memo": "チケットを使う認証方式。"
  },
  {
    "english": "oauth",
    "japanese": "OAuth",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "oauth is important in identity and access.",
    "memo": "第三者アプリに限定的な権限を与える仕組み。"
  },
  {
    "english": "openid connect",
    "japanese": "OpenID Connect",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "openid connect is important in identity and access.",
    "memo": "OAuthを基にした認証の仕組み。"
  },
  {
    "english": "saml",
    "japanese": "SAML",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "saml is important in identity and access.",
    "memo": "認証情報を交換するための標準。"
  },
  {
    "english": "role-based access control",
    "japanese": "ロールベースアクセス制御",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "role-based access control is important in identity and access.",
    "memo": "役割に応じて権限を与える方式。"
  },
  {
    "english": "attribute-based access control",
    "japanese": "属性ベースアクセス制御",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "attribute-based access control is important in identity and access.",
    "memo": "属性や条件に応じて権限を判断する方式。"
  },
  {
    "english": "least privilege",
    "japanese": "最小権限",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "least privilege is important in identity and access.",
    "memo": "必要最低限の権限だけを与える原則。"
  },
  {
    "english": "privileged account",
    "japanese": "特権アカウント",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "privileged account is important in identity and access.",
    "memo": "管理者など強い権限を持つアカウント。"
  },
  {
    "english": "access review",
    "japanese": "アクセスレビュー",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "access review is important in identity and access.",
    "memo": "権限が適切か定期的に確認すること。"
  },
  {
    "english": "provisioning",
    "japanese": "プロビジョニング",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "provisioning is important in identity and access.",
    "memo": "アカウントや権限を付与すること。"
  },
  {
    "english": "deprovisioning",
    "japanese": "デプロビジョニング",
    "pronounce": "",
    "category": "Identity and Access",
    "example": "deprovisioning is important in identity and access.",
    "memo": "不要になったアカウントや権限を削除すること。"
  },
  {
    "english": "cryptography",
    "japanese": "暗号技術",
    "pronounce": "",
    "category": "Cryptography",
    "example": "cryptography is important in cryptography.",
    "memo": "情報を安全に扱うための数学的技術。"
  },
  {
    "english": "encryption",
    "japanese": "暗号化",
    "pronounce": "",
    "category": "Cryptography",
    "example": "encryption is important in cryptography.",
    "memo": "情報を読めない形に変換すること。"
  },
  {
    "english": "decryption",
    "japanese": "復号",
    "pronounce": "",
    "category": "Cryptography",
    "example": "decryption is important in cryptography.",
    "memo": "暗号化された情報を元に戻すこと。"
  },
  {
    "english": "plaintext",
    "japanese": "平文",
    "pronounce": "",
    "category": "Cryptography",
    "example": "plaintext is important in cryptography.",
    "memo": "暗号化されていない読み取れるデータ。"
  },
  {
    "english": "ciphertext",
    "japanese": "暗号文",
    "pronounce": "",
    "category": "Cryptography",
    "example": "ciphertext is important in cryptography.",
    "memo": "暗号化されたデータ。"
  },
  {
    "english": "cipher",
    "japanese": "暗号方式",
    "pronounce": "",
    "category": "Cryptography",
    "example": "cipher is important in cryptography.",
    "memo": "暗号化や復号に使う方式。"
  },
  {
    "english": "key",
    "japanese": "鍵",
    "pronounce": "",
    "category": "Cryptography",
    "example": "key is important in cryptography.",
    "memo": "暗号化や復号に使う秘密情報。"
  },
  {
    "english": "symmetric encryption",
    "japanese": "共通鍵暗号",
    "pronounce": "",
    "category": "Cryptography",
    "example": "symmetric encryption is important in cryptography.",
    "memo": "同じ鍵で暗号化と復号を行う方式。"
  },
  {
    "english": "asymmetric encryption",
    "japanese": "公開鍵暗号",
    "pronounce": "",
    "category": "Cryptography",
    "example": "asymmetric encryption is important in cryptography.",
    "memo": "公開鍵と秘密鍵を使う暗号方式。"
  },
  {
    "english": "public key",
    "japanese": "公開鍵",
    "pronounce": "",
    "category": "Cryptography",
    "example": "public key is important in cryptography.",
    "memo": "他者に公開できる鍵。"
  },
  {
    "english": "private key",
    "japanese": "秘密鍵",
    "pronounce": "",
    "category": "Cryptography",
    "example": "private key is important in cryptography.",
    "memo": "本人だけが厳重に保管する鍵。"
  },
  {
    "english": "digital signature",
    "japanese": "デジタル署名",
    "pronounce": "",
    "category": "Cryptography",
    "example": "digital signature is important in cryptography.",
    "memo": "本人性と改ざん検知に使う仕組み。"
  },
  {
    "english": "certificate",
    "japanese": "証明書",
    "pronounce": "",
    "category": "Cryptography",
    "example": "certificate is important in cryptography.",
    "memo": "公開鍵の正当性を証明するデータ。"
  },
  {
    "english": "certificate authority",
    "japanese": "認証局",
    "pronounce": "",
    "category": "Cryptography",
    "example": "certificate authority is important in cryptography.",
    "memo": "証明書を発行する信頼された機関。"
  },
  {
    "english": "public key infrastructure",
    "japanese": "公開鍵基盤",
    "pronounce": "",
    "category": "Cryptography",
    "example": "public key infrastructure is important in cryptography.",
    "memo": "PKI。証明書や鍵を管理する仕組み。"
  },
  {
    "english": "hashing",
    "japanese": "ハッシュ化",
    "pronounce": "",
    "category": "Cryptography",
    "example": "hashing is important in cryptography.",
    "memo": "データから固定長の値を作る一方向処理。"
  },
  {
    "english": "hash value",
    "japanese": "ハッシュ値",
    "pronounce": "",
    "category": "Cryptography",
    "example": "hash value is important in cryptography.",
    "memo": "ハッシュ化で得られる値。"
  },
  {
    "english": "salt",
    "japanese": "ソルト",
    "pronounce": "",
    "category": "Cryptography",
    "example": "salt is important in cryptography.",
    "memo": "パスワードハッシュに追加するランダム値。"
  },
  {
    "english": "nonce",
    "japanese": "ノンス",
    "pronounce": "",
    "category": "Cryptography",
    "example": "nonce is important in cryptography.",
    "memo": "一度だけ使うランダムな値。"
  },
  {
    "english": "key exchange",
    "japanese": "鍵交換",
    "pronounce": "",
    "category": "Cryptography",
    "example": "key exchange is important in cryptography.",
    "memo": "安全に鍵を共有する仕組み。"
  },
  {
    "english": "transport layer security",
    "japanese": "TLS",
    "pronounce": "",
    "category": "Cryptography",
    "example": "transport layer security is important in cryptography.",
    "memo": "通信を暗号化して保護する仕組み。"
  },
  {
    "english": "secure sockets layer",
    "japanese": "SSL",
    "pronounce": "",
    "category": "Cryptography",
    "example": "secure sockets layer is important in cryptography.",
    "memo": "TLSの前身となる暗号通信技術。"
  },
  {
    "english": "perfect forward secrecy",
    "japanese": "前方秘匿性",
    "pronounce": "",
    "category": "Cryptography",
    "example": "perfect forward secrecy is important in cryptography.",
    "memo": "後から鍵が漏れても過去通信を守る性質。"
  },
  {
    "english": "hardware security module",
    "japanese": "HSM",
    "pronounce": "",
    "category": "Cryptography",
    "example": "hardware security module is important in cryptography.",
    "memo": "暗号鍵を安全に保管する専用装置。"
  },
  {
    "english": "key rotation",
    "japanese": "鍵ローテーション",
    "pronounce": "",
    "category": "Cryptography",
    "example": "key rotation is important in cryptography.",
    "memo": "鍵を定期的に変更する運用。"
  },
  {
    "english": "network",
    "japanese": "ネットワーク",
    "pronounce": "",
    "category": "Network Security",
    "example": "network is important in network security.",
    "memo": "機器同士を接続して通信する仕組み。"
  },
  {
    "english": "protocol",
    "japanese": "プロトコル",
    "pronounce": "",
    "category": "Network Security",
    "example": "protocol is important in network security.",
    "memo": "通信のルール。"
  },
  {
    "english": "ip address",
    "japanese": "IPアドレス",
    "pronounce": "",
    "category": "Network Security",
    "example": "ip address is important in network security.",
    "memo": "ネットワーク上の住所のような識別子。"
  },
  {
    "english": "mac address",
    "japanese": "MACアドレス",
    "pronounce": "",
    "category": "Network Security",
    "example": "mac address is important in network security.",
    "memo": "ネットワーク機器の物理的な識別子。"
  },
  {
    "english": "subnet",
    "japanese": "サブネット",
    "pronounce": "",
    "category": "Network Security",
    "example": "subnet is important in network security.",
    "memo": "ネットワークを分割した単位。"
  },
  {
    "english": "gateway",
    "japanese": "ゲートウェイ",
    "pronounce": "",
    "category": "Network Security",
    "example": "gateway is important in network security.",
    "memo": "異なるネットワークへの出入口。"
  },
  {
    "english": "router",
    "japanese": "ルーター",
    "pronounce": "",
    "category": "Network Security",
    "example": "router is important in network security.",
    "memo": "ネットワーク間で通信を転送する機器。"
  },
  {
    "english": "switch",
    "japanese": "スイッチ",
    "pronounce": "",
    "category": "Network Security",
    "example": "switch is important in network security.",
    "memo": "同じネットワーク内で通信を中継する機器。"
  },
  {
    "english": "firewall",
    "japanese": "ファイアウォール",
    "pronounce": "",
    "category": "Network Security",
    "example": "firewall is important in network security.",
    "memo": "通信をルールに基づいて許可・拒否する仕組み。"
  },
  {
    "english": "packet filtering",
    "japanese": "パケットフィルタリング",
    "pronounce": "",
    "category": "Network Security",
    "example": "packet filtering is important in network security.",
    "memo": "パケット情報を見て通信を制御すること。"
  },
  {
    "english": "stateful inspection",
    "japanese": "ステートフルインスペクション",
    "pronounce": "",
    "category": "Network Security",
    "example": "stateful inspection is important in network security.",
    "memo": "通信状態を見て判断するファイアウォール機能。"
  },
  {
    "english": "proxy",
    "japanese": "プロキシ",
    "pronounce": "",
    "category": "Network Security",
    "example": "proxy is important in network security.",
    "memo": "利用者の代わりに通信を中継する仕組み。"
  },
  {
    "english": "reverse proxy",
    "japanese": "リバースプロキシ",
    "pronounce": "",
    "category": "Network Security",
    "example": "reverse proxy is important in network security.",
    "memo": "サーバー側の前面で通信を受けるプロキシ。"
  },
  {
    "english": "load balancer",
    "japanese": "ロードバランサー",
    "pronounce": "",
    "category": "Network Security",
    "example": "load balancer is important in network security.",
    "memo": "通信を複数サーバーに分散する装置。"
  },
  {
    "english": "network segmentation",
    "japanese": "ネットワーク分離",
    "pronounce": "",
    "category": "Network Security",
    "example": "network segmentation is important in network security.",
    "memo": "ネットワークを分割して被害拡大を防ぐこと。"
  },
  {
    "english": "vlan",
    "japanese": "VLAN",
    "pronounce": "",
    "category": "Network Security",
    "example": "vlan is important in network security.",
    "memo": "仮想的にネットワークを分ける技術。"
  },
  {
    "english": "vpn",
    "japanese": "VPN",
    "pronounce": "",
    "category": "Network Security",
    "example": "vpn is important in network security.",
    "memo": "仮想的な専用通信路を作る技術。"
  },
  {
    "english": "dns",
    "japanese": "DNS",
    "pronounce": "",
    "category": "Network Security",
    "example": "dns is important in network security.",
    "memo": "ドメイン名をIPアドレスに変換する仕組み。"
  },
  {
    "english": "dhcp",
    "japanese": "DHCP",
    "pronounce": "",
    "category": "Network Security",
    "example": "dhcp is important in network security.",
    "memo": "IPアドレスなどを自動配布する仕組み。"
  },
  {
    "english": "nat",
    "japanese": "NAT",
    "pronounce": "",
    "category": "Network Security",
    "example": "nat is important in network security.",
    "memo": "IPアドレスを変換する技術。"
  },
  {
    "english": "port",
    "japanese": "ポート",
    "pronounce": "",
    "category": "Network Security",
    "example": "port is important in network security.",
    "memo": "通信先のサービスを識別する番号。"
  },
  {
    "english": "tcp",
    "japanese": "TCP",
    "pronounce": "",
    "category": "Network Security",
    "example": "tcp is important in network security.",
    "memo": "信頼性のある通信を行うプロトコル。"
  },
  {
    "english": "udp",
    "japanese": "UDP",
    "pronounce": "",
    "category": "Network Security",
    "example": "udp is important in network security.",
    "memo": "軽量で高速な通信を行うプロトコル。"
  },
  {
    "english": "icmp",
    "japanese": "ICMP",
    "pronounce": "",
    "category": "Network Security",
    "example": "icmp is important in network security.",
    "memo": "通信状態の確認などに使うプロトコル。"
  },
  {
    "english": "zero trust network access",
    "japanese": "ゼロトラストネットワークアクセス",
    "pronounce": "",
    "category": "Network Security",
    "example": "zero trust network access is important in network security.",
    "memo": "常に検証してアクセスを許可する考え方。"
  },
  {
    "english": "malware",
    "japanese": "マルウェア",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "malware is important in attacks and malware.",
    "memo": "悪意あるソフトウェアの総称。"
  },
  {
    "english": "virus",
    "japanese": "ウイルス",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "virus is important in attacks and malware.",
    "memo": "他のファイルに感染して広がるマルウェア。"
  },
  {
    "english": "worm",
    "japanese": "ワーム",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "worm is important in attacks and malware.",
    "memo": "自力でネットワーク上に広がるマルウェア。"
  },
  {
    "english": "trojan horse",
    "japanese": "トロイの木馬",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "trojan horse is important in attacks and malware.",
    "memo": "正規ソフトに見せかけるマルウェア。"
  },
  {
    "english": "ransomware",
    "japanese": "ランサムウェア",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "ransomware is important in attacks and malware.",
    "memo": "データを暗号化して身代金を要求する攻撃。"
  },
  {
    "english": "spyware",
    "japanese": "スパイウェア",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "spyware is important in attacks and malware.",
    "memo": "利用者の情報をこっそり収集するソフト。"
  },
  {
    "english": "adware",
    "japanese": "アドウェア",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "adware is important in attacks and malware.",
    "memo": "広告表示を目的とする迷惑ソフト。"
  },
  {
    "english": "rootkit",
    "japanese": "ルートキット",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "rootkit is important in attacks and malware.",
    "memo": "侵入後に存在を隠すためのツール。"
  },
  {
    "english": "keylogger",
    "japanese": "キーロガー",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "keylogger is important in attacks and malware.",
    "memo": "キーボード入力を記録するソフト。"
  },
  {
    "english": "botnet",
    "japanese": "ボットネット",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "botnet is important in attacks and malware.",
    "memo": "攻撃者に操られる感染端末の集まり。"
  },
  {
    "english": "phishing",
    "japanese": "フィッシング",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "phishing is important in attacks and malware.",
    "memo": "偽メールや偽サイトで情報を盗む攻撃。"
  },
  {
    "english": "spear phishing",
    "japanese": "標的型フィッシング",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "spear phishing is important in attacks and malware.",
    "memo": "特定の相手を狙ったフィッシング。"
  },
  {
    "english": "whaling",
    "japanese": "ホエーリング",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "whaling is important in attacks and malware.",
    "memo": "経営層など重要人物を狙う攻撃。"
  },
  {
    "english": "vishing",
    "japanese": "音声フィッシング",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "vishing is important in attacks and malware.",
    "memo": "電話を使って情報をだまし取る攻撃。"
  },
  {
    "english": "smishing",
    "japanese": "SMSフィッシング",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "smishing is important in attacks and malware.",
    "memo": "SMSを使ったフィッシング。"
  },
  {
    "english": "social engineering",
    "japanese": "ソーシャルエンジニアリング",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "social engineering is important in attacks and malware.",
    "memo": "人の心理を悪用する攻撃。"
  },
  {
    "english": "shoulder surfing",
    "japanese": "ショルダーサーフィン",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "shoulder surfing is important in attacks and malware.",
    "memo": "画面や入力を盗み見る行為。"
  },
  {
    "english": "tailgating",
    "japanese": "共連れ",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "tailgating is important in attacks and malware.",
    "memo": "許可された人に続いて入る不正入室。"
  },
  {
    "english": "brute force attack",
    "japanese": "総当たり攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "brute force attack is important in attacks and malware.",
    "memo": "大量の候補を試して突破する攻撃。"
  },
  {
    "english": "dictionary attack",
    "japanese": "辞書攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "dictionary attack is important in attacks and malware.",
    "memo": "よく使われる単語を試す攻撃。"
  },
  {
    "english": "credential stuffing",
    "japanese": "認証情報リスト攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "credential stuffing is important in attacks and malware.",
    "memo": "流出したIDとパスワードを使う攻撃。"
  },
  {
    "english": "denial of service",
    "japanese": "サービス妨害攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "denial of service is important in attacks and malware.",
    "memo": "サービスを使えない状態にする攻撃。"
  },
  {
    "english": "distributed denial of service",
    "japanese": "分散型サービス妨害攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "distributed denial of service is important in attacks and malware.",
    "memo": "多数の端末から行うDoS攻撃。"
  },
  {
    "english": "man-in-the-middle attack",
    "japanese": "中間者攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "man-in-the-middle attack is important in attacks and malware.",
    "memo": "通信の途中に割り込む攻撃。"
  },
  {
    "english": "zero-day attack",
    "japanese": "ゼロデイ攻撃",
    "pronounce": "",
    "category": "Attacks and Malware",
    "example": "zero-day attack is important in attacks and malware.",
    "memo": "修正前の脆弱性を悪用する攻撃。"
  },
  {
    "english": "web application",
    "japanese": "Webアプリケーション",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "web application is important in web application security.",
    "memo": "ブラウザから利用するアプリケーション。"
  },
  {
    "english": "http",
    "japanese": "HTTP",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "http is important in web application security.",
    "memo": "Web通信で使われる基本プロトコル。"
  },
  {
    "english": "https",
    "japanese": "HTTPS",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "https is important in web application security.",
    "memo": "TLSで保護されたHTTP通信。"
  },
  {
    "english": "cookie",
    "japanese": "クッキー",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "cookie is important in web application security.",
    "memo": "ブラウザに保存される小さなデータ。"
  },
  {
    "english": "session",
    "japanese": "セッション",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "session is important in web application security.",
    "memo": "利用者の一連の操作状態。"
  },
  {
    "english": "token",
    "japanese": "トークン",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "token is important in web application security.",
    "memo": "認証や認可に使う文字列。"
  },
  {
    "english": "input validation",
    "japanese": "入力検証",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "input validation is important in web application security.",
    "memo": "入力値が正しいか確認すること。"
  },
  {
    "english": "output encoding",
    "japanese": "出力エンコーディング",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "output encoding is important in web application security.",
    "memo": "危険な文字を安全な形に変換すること。"
  },
  {
    "english": "sql injection",
    "japanese": "SQLインジェクション",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "sql injection is important in web application security.",
    "memo": "不正なSQLを実行させる攻撃。"
  },
  {
    "english": "cross-site scripting",
    "japanese": "クロスサイトスクリプティング",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "cross-site scripting is important in web application security.",
    "memo": "XSS。悪意あるスクリプトを実行させる攻撃。"
  },
  {
    "english": "cross-site request forgery",
    "japanese": "クロスサイトリクエストフォージェリ",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "cross-site request forgery is important in web application security.",
    "memo": "CSRF。利用者に意図しない操作をさせる攻撃。"
  },
  {
    "english": "server-side request forgery",
    "japanese": "サーバーサイドリクエストフォージェリ",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "server-side request forgery is important in web application security.",
    "memo": "SSRF。サーバーから不正なリクエストを送らせる攻撃。"
  },
  {
    "english": "command injection",
    "japanese": "コマンドインジェクション",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "command injection is important in web application security.",
    "memo": "OSコマンドを不正に実行させる攻撃。"
  },
  {
    "english": "path traversal",
    "japanese": "パストラバーサル",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "path traversal is important in web application security.",
    "memo": "想定外のファイルへアクセスする攻撃。"
  },
  {
    "english": "file upload vulnerability",
    "japanese": "ファイルアップロード脆弱性",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "file upload vulnerability is important in web application security.",
    "memo": "危険なファイルをアップロードされる弱点。"
  },
  {
    "english": "secure coding",
    "japanese": "セキュアコーディング",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "secure coding is important in web application security.",
    "memo": "脆弱性を作りにくい実装方法。"
  },
  {
    "english": "code review",
    "japanese": "コードレビュー",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "code review is important in web application security.",
    "memo": "ソースコードを確認する活動。"
  },
  {
    "english": "static application security testing",
    "japanese": "静的アプリケーションセキュリティテスト",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "static application security testing is important in web application security.",
    "memo": "SAST。コードを実行せずに検査する方法。"
  },
  {
    "english": "dynamic application security testing",
    "japanese": "動的アプリケーションセキュリティテスト",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "dynamic application security testing is important in web application security.",
    "memo": "DAST。実行中のアプリを検査する方法。"
  },
  {
    "english": "api security",
    "japanese": "APIセキュリティ",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "api security is important in web application security.",
    "memo": "APIの認証・権限・入力などを守ること。"
  },
  {
    "english": "rate limiting",
    "japanese": "レート制限",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "rate limiting is important in web application security.",
    "memo": "一定時間内のリクエスト数を制限すること。"
  },
  {
    "english": "cors",
    "japanese": "CORS",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "cors is important in web application security.",
    "memo": "異なるオリジン間のアクセス制御。"
  },
  {
    "english": "content security policy",
    "japanese": "コンテンツセキュリティポリシー",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "content security policy is important in web application security.",
    "memo": "読み込めるスクリプトなどを制限する仕組み。"
  },
  {
    "english": "owasp top ten",
    "japanese": "OWASP Top 10",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "owasp top ten is important in web application security.",
    "memo": "Webアプリの代表的なリスク一覧。"
  },
  {
    "english": "web application firewall",
    "japanese": "Webアプリケーションファイアウォール",
    "pronounce": "",
    "category": "Web Application Security",
    "example": "web application firewall is important in web application security.",
    "memo": "WAF。Web攻撃を検知・防御する仕組み。"
  },
  {
    "english": "cloud computing",
    "japanese": "クラウドコンピューティング",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "cloud computing is important in cloud security.",
    "memo": "インターネット経由でIT資源を利用する形態。"
  },
  {
    "english": "shared responsibility model",
    "japanese": "責任共有モデル",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "shared responsibility model is important in cloud security.",
    "memo": "クラウド事業者と利用者の責任範囲の考え方。"
  },
  {
    "english": "infrastructure as a service",
    "japanese": "IaaS",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "infrastructure as a service is important in cloud security.",
    "memo": "サーバーなどの基盤をサービスとして使う形態。"
  },
  {
    "english": "platform as a service",
    "japanese": "PaaS",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "platform as a service is important in cloud security.",
    "memo": "アプリ実行基盤をサービスとして使う形態。"
  },
  {
    "english": "software as a service",
    "japanese": "SaaS",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "software as a service is important in cloud security.",
    "memo": "ソフトウェアをサービスとして使う形態。"
  },
  {
    "english": "virtual machine",
    "japanese": "仮想マシン",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "virtual machine is important in cloud security.",
    "memo": "ソフトウェアで作られた仮想的なコンピューター。"
  },
  {
    "english": "container",
    "japanese": "コンテナ",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "container is important in cloud security.",
    "memo": "アプリと実行環境をまとめて動かす技術。"
  },
  {
    "english": "kubernetes",
    "japanese": "Kubernetes",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "kubernetes is important in cloud security.",
    "memo": "コンテナを管理・運用する基盤。"
  },
  {
    "english": "serverless",
    "japanese": "サーバーレス",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "serverless is important in cloud security.",
    "memo": "サーバー管理を意識せずコードを実行する形態。"
  },
  {
    "english": "object storage",
    "japanese": "オブジェクトストレージ",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "object storage is important in cloud security.",
    "memo": "ファイルをオブジェクトとして保存するストレージ。"
  },
  {
    "english": "bucket",
    "japanese": "バケット",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "bucket is important in cloud security.",
    "memo": "クラウドストレージの保存領域。"
  },
  {
    "english": "cloud firewall",
    "japanese": "クラウドファイアウォール",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "cloud firewall is important in cloud security.",
    "memo": "クラウド環境の通信制御。"
  },
  {
    "english": "security group",
    "japanese": "セキュリティグループ",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "security group is important in cloud security.",
    "memo": "クラウド上の仮想ファイアウォール設定。"
  },
  {
    "english": "iam policy",
    "japanese": "IAMポリシー",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "iam policy is important in cloud security.",
    "memo": "クラウド権限を定義するルール。"
  },
  {
    "english": "service account",
    "japanese": "サービスアカウント",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "service account is important in cloud security.",
    "memo": "アプリやサービス用のアカウント。"
  },
  {
    "english": "secret management",
    "japanese": "シークレット管理",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "secret management is important in cloud security.",
    "memo": "パスワードや鍵を安全に管理すること。"
  },
  {
    "english": "cloud logging",
    "japanese": "クラウドログ管理",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "cloud logging is important in cloud security.",
    "memo": "クラウド上の操作や通信の記録管理。"
  },
  {
    "english": "cloud monitoring",
    "japanese": "クラウド監視",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "cloud monitoring is important in cloud security.",
    "memo": "クラウド資源の状態を監視すること。"
  },
  {
    "english": "misconfiguration",
    "japanese": "設定不備",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "misconfiguration is important in cloud security.",
    "memo": "誤った設定によるセキュリティ上の問題。"
  },
  {
    "english": "public exposure",
    "japanese": "外部公開",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "public exposure is important in cloud security.",
    "memo": "インターネットからアクセスできる状態。"
  },
  {
    "english": "data residency",
    "japanese": "データ所在地",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "data residency is important in cloud security.",
    "memo": "データが保存される国や地域。"
  },
  {
    "english": "availability zone",
    "japanese": "アベイラビリティゾーン",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "availability zone is important in cloud security.",
    "memo": "クラウドの独立したデータセンター区画。"
  },
  {
    "english": "region",
    "japanese": "リージョン",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "region is important in cloud security.",
    "memo": "クラウドの提供地域。"
  },
  {
    "english": "cloud access security broker",
    "japanese": "CASB",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "cloud access security broker is important in cloud security.",
    "memo": "クラウド利用を可視化・制御する仕組み。"
  },
  {
    "english": "cloud security posture management",
    "japanese": "CSPM",
    "pronounce": "",
    "category": "Cloud Security",
    "example": "cloud security posture management is important in cloud security.",
    "memo": "クラウド設定リスクを継続的に確認する仕組み。"
  },
  {
    "english": "endpoint",
    "japanese": "エンドポイント",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "endpoint is important in endpoint and os.",
    "memo": "PCやスマホなど利用者側の端末。"
  },
  {
    "english": "operating system",
    "japanese": "オペレーティングシステム",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "operating system is important in endpoint and os.",
    "memo": "コンピューターを動かす基本ソフトウェア。"
  },
  {
    "english": "kernel",
    "japanese": "カーネル",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "kernel is important in endpoint and os.",
    "memo": "OSの中核部分。"
  },
  {
    "english": "process",
    "japanese": "プロセス",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "process is important in endpoint and os.",
    "memo": "実行中のプログラム。"
  },
  {
    "english": "service",
    "japanese": "サービス",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "service is important in endpoint and os.",
    "memo": "バックグラウンドで動く機能。"
  },
  {
    "english": "patch",
    "japanese": "パッチ",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "patch is important in endpoint and os.",
    "memo": "不具合や脆弱性を修正する更新。"
  },
  {
    "english": "patch management",
    "japanese": "パッチ管理",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "patch management is important in endpoint and os.",
    "memo": "更新プログラムを管理・適用すること。"
  },
  {
    "english": "antivirus",
    "japanese": "アンチウイルス",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "antivirus is important in endpoint and os.",
    "memo": "ウイルスなどを検知・駆除するソフト。"
  },
  {
    "english": "endpoint detection and response",
    "japanese": "EDR",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "endpoint detection and response is important in endpoint and os.",
    "memo": "端末の不審な動きを検知・対応する仕組み。"
  },
  {
    "english": "mobile device management",
    "japanese": "MDM",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "mobile device management is important in endpoint and os.",
    "memo": "スマホやPCを集中管理する仕組み。"
  },
  {
    "english": "disk encryption",
    "japanese": "ディスク暗号化",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "disk encryption is important in endpoint and os.",
    "memo": "端末の保存データを暗号化すること。"
  },
  {
    "english": "secure boot",
    "japanese": "セキュアブート",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "secure boot is important in endpoint and os.",
    "memo": "信頼されたソフトだけで起動する仕組み。"
  },
  {
    "english": "registry",
    "japanese": "レジストリ",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "registry is important in endpoint and os.",
    "memo": "Windowsの設定情報を保存する仕組み。"
  },
  {
    "english": "file system",
    "japanese": "ファイルシステム",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "file system is important in endpoint and os.",
    "memo": "ファイルを保存・管理する仕組み。"
  },
  {
    "english": "permission",
    "japanese": "権限",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "permission is important in endpoint and os.",
    "memo": "ファイルや機能を使う許可。"
  },
  {
    "english": "administrator",
    "japanese": "管理者",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "administrator is important in endpoint and os.",
    "memo": "強い権限を持つ利用者。"
  },
  {
    "english": "standard user",
    "japanese": "標準ユーザー",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "standard user is important in endpoint and os.",
    "memo": "制限された権限の利用者。"
  },
  {
    "english": "log file",
    "japanese": "ログファイル",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "log file is important in endpoint and os.",
    "memo": "操作や状態を記録したファイル。"
  },
  {
    "english": "event viewer",
    "japanese": "イベントビューアー",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "event viewer is important in endpoint and os.",
    "memo": "Windowsのログ確認ツール。"
  },
  {
    "english": "command line",
    "japanese": "コマンドライン",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "command line is important in endpoint and os.",
    "memo": "文字入力で操作する画面。"
  },
  {
    "english": "powershell",
    "japanese": "PowerShell",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "powershell is important in endpoint and os.",
    "memo": "Windowsの管理用シェル。"
  },
  {
    "english": "shell",
    "japanese": "シェル",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "shell is important in endpoint and os.",
    "memo": "OSに命令を送るための環境。"
  },
  {
    "english": "script",
    "japanese": "スクリプト",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "script is important in endpoint and os.",
    "memo": "処理を自動化するための簡易プログラム。"
  },
  {
    "english": "process monitoring",
    "japanese": "プロセス監視",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "process monitoring is important in endpoint and os.",
    "memo": "実行中のプログラムを監視すること。"
  },
  {
    "english": "application allowlisting",
    "japanese": "アプリケーション許可リスト",
    "pronounce": "",
    "category": "Endpoint and OS",
    "example": "application allowlisting is important in endpoint and os.",
    "memo": "許可されたアプリだけを実行する制御。"
  },
  {
    "english": "security operations",
    "japanese": "セキュリティ運用",
    "pronounce": "",
    "category": "Security Operations",
    "example": "security operations is important in security operations.",
    "memo": "日々の監視・対応・改善活動。"
  },
  {
    "english": "security operations center",
    "japanese": "SOC",
    "pronounce": "",
    "category": "Security Operations",
    "example": "security operations center is important in security operations.",
    "memo": "セキュリティ監視を行う組織や拠点。"
  },
  {
    "english": "incident",
    "japanese": "インシデント",
    "pronounce": "",
    "category": "Security Operations",
    "example": "incident is important in security operations.",
    "memo": "セキュリティ上の事故や問題。"
  },
  {
    "english": "incident response",
    "japanese": "インシデント対応",
    "pronounce": "",
    "category": "Security Operations",
    "example": "incident response is important in security operations.",
    "memo": "事故発生時に調査・封じ込め・復旧する活動。"
  },
  {
    "english": "alert",
    "japanese": "アラート",
    "pronounce": "",
    "category": "Security Operations",
    "example": "alert is important in security operations.",
    "memo": "異常や危険を知らせる通知。"
  },
  {
    "english": "event",
    "japanese": "イベント",
    "pronounce": "",
    "category": "Security Operations",
    "example": "event is important in security operations.",
    "memo": "システム上で発生した記録対象の出来事。"
  },
  {
    "english": "log",
    "japanese": "ログ",
    "pronounce": "",
    "category": "Security Operations",
    "example": "log is important in security operations.",
    "memo": "操作や通信などの記録。"
  },
  {
    "english": "log analysis",
    "japanese": "ログ分析",
    "pronounce": "",
    "category": "Security Operations",
    "example": "log analysis is important in security operations.",
    "memo": "ログから異常や原因を調べること。"
  },
  {
    "english": "siem",
    "japanese": "SIEM",
    "pronounce": "",
    "category": "Security Operations",
    "example": "siem is important in security operations.",
    "memo": "ログを集約・分析して検知する仕組み。"
  },
  {
    "english": "soar",
    "japanese": "SOAR",
    "pronounce": "",
    "category": "Security Operations",
    "example": "soar is important in security operations.",
    "memo": "セキュリティ対応を自動化・効率化する仕組み。"
  },
  {
    "english": "playbook",
    "japanese": "プレイブック",
    "pronounce": "",
    "category": "Security Operations",
    "example": "playbook is important in security operations.",
    "memo": "対応手順をまとめたもの。"
  },
  {
    "english": "triage",
    "japanese": "トリアージ",
    "pronounce": "",
    "category": "Security Operations",
    "example": "triage is important in security operations.",
    "memo": "優先度を判断して振り分けること。"
  },
  {
    "english": "containment",
    "japanese": "封じ込め",
    "pronounce": "",
    "category": "Security Operations",
    "example": "containment is important in security operations.",
    "memo": "被害拡大を止める対応。"
  },
  {
    "english": "eradication",
    "japanese": "根絶",
    "pronounce": "",
    "category": "Security Operations",
    "example": "eradication is important in security operations.",
    "memo": "原因やマルウェアを取り除くこと。"
  },
  {
    "english": "recovery",
    "japanese": "復旧",
    "pronounce": "",
    "category": "Security Operations",
    "example": "recovery is important in security operations.",
    "memo": "正常な状態に戻すこと。"
  },
  {
    "english": "forensics",
    "japanese": "フォレンジック",
    "pronounce": "",
    "category": "Security Operations",
    "example": "forensics is important in security operations.",
    "memo": "証拠を保全し調査する技術。"
  },
  {
    "english": "chain of custody",
    "japanese": "証拠保全の連鎖",
    "pronounce": "",
    "category": "Security Operations",
    "example": "chain of custody is important in security operations.",
    "memo": "証拠の扱いを記録して信頼性を保つこと。"
  },
  {
    "english": "threat intelligence",
    "japanese": "脅威インテリジェンス",
    "pronounce": "",
    "category": "Security Operations",
    "example": "threat intelligence is important in security operations.",
    "memo": "攻撃者や脅威に関する情報。"
  },
  {
    "english": "indicator of compromise",
    "japanese": "侵害指標",
    "pronounce": "",
    "category": "Security Operations",
    "example": "indicator of compromise is important in security operations.",
    "memo": "侵害の可能性を示す痕跡。"
  },
  {
    "english": "false positive",
    "japanese": "誤検知",
    "pronounce": "",
    "category": "Security Operations",
    "example": "false positive is important in security operations.",
    "memo": "問題がないのに検知されること。"
  },
  {
    "english": "false negative",
    "japanese": "見逃し",
    "pronounce": "",
    "category": "Security Operations",
    "example": "false negative is important in security operations.",
    "memo": "問題があるのに検知されないこと。"
  },
  {
    "english": "mean time to detect",
    "japanese": "平均検知時間",
    "pronounce": "",
    "category": "Security Operations",
    "example": "mean time to detect is important in security operations.",
    "memo": "MTTD。検知までの平均時間。"
  },
  {
    "english": "mean time to respond",
    "japanese": "平均対応時間",
    "pronounce": "",
    "category": "Security Operations",
    "example": "mean time to respond is important in security operations.",
    "memo": "MTTR。対応までの平均時間。"
  },
  {
    "english": "vulnerability scan",
    "japanese": "脆弱性スキャン",
    "pronounce": "",
    "category": "Security Operations",
    "example": "vulnerability scan is important in security operations.",
    "memo": "脆弱性がないか自動で確認すること。"
  },
  {
    "english": "penetration test",
    "japanese": "侵入テスト",
    "pronounce": "",
    "category": "Security Operations",
    "example": "penetration test is important in security operations.",
    "memo": "攻撃者視点で安全性を確認するテスト。"
  },
  {
    "english": "governance",
    "japanese": "ガバナンス",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "governance is important in governance and compliance.",
    "memo": "組織を適切に管理・統制する仕組み。"
  },
  {
    "english": "compliance",
    "japanese": "コンプライアンス",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "compliance is important in governance and compliance.",
    "memo": "法令や規則を守ること。"
  },
  {
    "english": "policy",
    "japanese": "ポリシー",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "policy is important in governance and compliance.",
    "memo": "組織の基本方針。"
  },
  {
    "english": "standard",
    "japanese": "標準",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "standard is important in governance and compliance.",
    "memo": "守るべき具体的な基準。"
  },
  {
    "english": "procedure",
    "japanese": "手順",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "procedure is important in governance and compliance.",
    "memo": "作業の進め方を定めたもの。"
  },
  {
    "english": "guideline",
    "japanese": "ガイドライン",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "guideline is important in governance and compliance.",
    "memo": "推奨される考え方や方法。"
  },
  {
    "english": "audit",
    "japanese": "監査",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "audit is important in governance and compliance.",
    "memo": "ルール通りに運用されているか確認すること。"
  },
  {
    "english": "evidence",
    "japanese": "証跡",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "evidence is important in governance and compliance.",
    "memo": "監査や確認に使う記録。"
  },
  {
    "english": "control objective",
    "japanese": "管理目的",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "control objective is important in governance and compliance.",
    "memo": "管理策によって達成したい目的。"
  },
  {
    "english": "security policy",
    "japanese": "セキュリティポリシー",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "security policy is important in governance and compliance.",
    "memo": "セキュリティに関する組織の基本ルール。"
  },
  {
    "english": "acceptable use policy",
    "japanese": "利用許諾ポリシー",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "acceptable use policy is important in governance and compliance.",
    "memo": "システムの利用ルール。"
  },
  {
    "english": "data classification",
    "japanese": "データ分類",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "data classification is important in governance and compliance.",
    "memo": "情報の重要度に応じて分類すること。"
  },
  {
    "english": "data owner",
    "japanese": "データオーナー",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "data owner is important in governance and compliance.",
    "memo": "データの管理責任を持つ人。"
  },
  {
    "english": "data custodian",
    "japanese": "データ管理者",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "data custodian is important in governance and compliance.",
    "memo": "データの運用管理を行う人。"
  },
  {
    "english": "retention period",
    "japanese": "保存期間",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "retention period is important in governance and compliance.",
    "memo": "データを保管する期間。"
  },
  {
    "english": "privacy policy",
    "japanese": "プライバシーポリシー",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "privacy policy is important in governance and compliance.",
    "memo": "個人情報の扱いを定めた方針。"
  },
  {
    "english": "regulation",
    "japanese": "規制",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "regulation is important in governance and compliance.",
    "memo": "法律や公的なルール。"
  },
  {
    "english": "standardization",
    "japanese": "標準化",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "standardization is important in governance and compliance.",
    "memo": "ルールや形式を統一すること。"
  },
  {
    "english": "iso 27001",
    "japanese": "ISO 27001",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "iso 27001 is important in governance and compliance.",
    "memo": "情報セキュリティマネジメントの国際規格。"
  },
  {
    "english": "nist cybersecurity framework",
    "japanese": "NISTサイバーセキュリティフレームワーク",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "nist cybersecurity framework is important in governance and compliance.",
    "memo": "サイバーセキュリティ管理の枠組み。"
  },
  {
    "english": "business continuity plan",
    "japanese": "事業継続計画",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "business continuity plan is important in governance and compliance.",
    "memo": "BCP。災害や障害時も事業を続ける計画。"
  },
  {
    "english": "disaster recovery plan",
    "japanese": "災害復旧計画",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "disaster recovery plan is important in governance and compliance.",
    "memo": "DRP。災害時の復旧計画。"
  },
  {
    "english": "vendor management",
    "japanese": "ベンダー管理",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "vendor management is important in governance and compliance.",
    "memo": "外部委託先を管理すること。"
  },
  {
    "english": "service level agreement",
    "japanese": "サービスレベル合意",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "service level agreement is important in governance and compliance.",
    "memo": "SLA。サービス品質に関する合意。"
  },
  {
    "english": "due diligence",
    "japanese": "デューデリジェンス",
    "pronounce": "",
    "category": "Governance and Compliance",
    "example": "due diligence is important in governance and compliance.",
    "memo": "取引先などを事前に調査すること。"
  },
  {
    "english": "computer",
    "japanese": "コンピューター",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "computer is important in it fundamentals.",
    "memo": "データを処理する機械。"
  },
  {
    "english": "server",
    "japanese": "サーバー",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "server is important in it fundamentals.",
    "memo": "他の端末に機能やデータを提供するコンピューター。"
  },
  {
    "english": "client",
    "japanese": "クライアント",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "client is important in it fundamentals.",
    "memo": "サーバーの機能を利用する端末やアプリ。"
  },
  {
    "english": "database",
    "japanese": "データベース",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "database is important in it fundamentals.",
    "memo": "データを整理して保存する仕組み。"
  },
  {
    "english": "application",
    "japanese": "アプリケーション",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "application is important in it fundamentals.",
    "memo": "目的に応じて使うソフトウェア。"
  },
  {
    "english": "software",
    "japanese": "ソフトウェア",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "software is important in it fundamentals.",
    "memo": "コンピューター上で動くプログラム。"
  },
  {
    "english": "hardware",
    "japanese": "ハードウェア",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "hardware is important in it fundamentals.",
    "memo": "物理的な機器。"
  },
  {
    "english": "firmware",
    "japanese": "ファームウェア",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "firmware is important in it fundamentals.",
    "memo": "機器に組み込まれた制御ソフト。"
  },
  {
    "english": "memory",
    "japanese": "メモリ",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "memory is important in it fundamentals.",
    "memo": "一時的にデータを保存する部品。"
  },
  {
    "english": "storage",
    "japanese": "ストレージ",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "storage is important in it fundamentals.",
    "memo": "データを長期保存する装置や領域。"
  },
  {
    "english": "cpu",
    "japanese": "CPU",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "cpu is important in it fundamentals.",
    "memo": "計算や処理を行う中心部品。"
  },
  {
    "english": "virtualization",
    "japanese": "仮想化",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "virtualization is important in it fundamentals.",
    "memo": "物理資源を仮想的に分けて使う技術。"
  },
  {
    "english": "hypervisor",
    "japanese": "ハイパーバイザー",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "hypervisor is important in it fundamentals.",
    "memo": "仮想マシンを動かすためのソフトウェア。"
  },
  {
    "english": "system backup",
    "japanese": "システムバックアップ",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "system backup is important in it fundamentals.",
    "memo": "システムやデータの予備コピー。"
  },
  {
    "english": "restore",
    "japanese": "リストア",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "restore is important in it fundamentals.",
    "memo": "バックアップから元に戻すこと。"
  },
  {
    "english": "redundancy",
    "japanese": "冗長化",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "redundancy is important in it fundamentals.",
    "memo": "故障に備えて予備を用意すること。"
  },
  {
    "english": "scalability",
    "japanese": "拡張性",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "scalability is important in it fundamentals.",
    "memo": "利用量増加に合わせて増強できる性質。"
  },
  {
    "english": "latency",
    "japanese": "遅延",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "latency is important in it fundamentals.",
    "memo": "通信や処理にかかる待ち時間。"
  },
  {
    "english": "bandwidth",
    "japanese": "帯域幅",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "bandwidth is important in it fundamentals.",
    "memo": "一定時間に送れるデータ量。"
  },
  {
    "english": "throughput",
    "japanese": "スループット",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "throughput is important in it fundamentals.",
    "memo": "実際に処理できるデータ量。"
  },
  {
    "english": "system availability",
    "japanese": "システム可用性",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "system availability is important in it fundamentals.",
    "memo": "必要なときにシステムを使える状態。"
  },
  {
    "english": "reliability",
    "japanese": "信頼性",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "reliability is important in it fundamentals.",
    "memo": "故障せず安定して動く性質。"
  },
  {
    "english": "scanning",
    "japanese": "スキャン",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "scanning is important in it fundamentals.",
    "memo": "対象を調査・確認すること。"
  },
  {
    "english": "configuration",
    "japanese": "設定",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "configuration is important in it fundamentals.",
    "memo": "システムや機器の動作条件。"
  },
  {
    "english": "change management",
    "japanese": "変更管理",
    "pronounce": "",
    "category": "IT Fundamentals",
    "example": "change management is important in it fundamentals.",
    "memo": "変更を安全に計画・実施・記録する活動。"
  }
].map((word) => normalizeWord(word));

let words = loadWords();
let stats = loadStats();
let currentWord = null;
let currentQuestionMode = "term";
let hasAnswered = false;

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  populateCategoryFilter();
  saveWords();
  createAutoBackup();
  renderAll();
  renderChoiceQuestion();
});

/* =========================
   Data
========================= */
function makeId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `word-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function buildQuestionText(word) {
  const memo = String(word.memo || "").trim();
  const japanese = String(word.japanese || "").trim();

  if (memo) {
    return `次の説明に当てはまる用語はどれですか？\n${memo}`;
  }

  return `次の説明に当てはまる用語はどれですか？\n「${japanese}」に関するセキュリティ・IT用語です。`;
}

function normalizeWord(word) {
  const migratedStreak = word.correctStreak ?? (word.known || word.hidden ? MASTER_STREAK : 0);
  const correctStreak = Math.min(MASTER_STREAK, Math.max(0, Number(migratedStreak || 0)));
  const mastered = correctStreak >= MASTER_STREAK || word.hidden === true || word.known === true;

  return {
    id: word.id || makeId(),
    english: String(word.english || "").trim(),
    japanese: String(word.japanese || "").trim(),
    pronounce: String(word.pronounce || "").trim(),
    category: String(word.category || "Custom").trim(),
    example: String(word.example || "").trim(),
    memo: String(word.memo || "").trim(),
    question: String(word.question || buildQuestionText(word)).trim(),
    correctStreak: mastered ? MASTER_STREAK : correctStreak,
    hidden: mastered,
    known: mastered,
    weak: mastered ? false : Boolean(word.weak)
  };
}

function getCorrectStreak(word) {
  return Math.min(MASTER_STREAK, Math.max(0, Number(word.correctStreak || 0)));
}

function isMastered(word) {
  return getCorrectStreak(word) >= MASTER_STREAK || word.hidden === true || word.known === true;
}

function mergeDefaultWords(savedWords) {
  const merged = savedWords.map(normalizeWord).filter((word) => word.english && word.japanese);
  const existing = new Set(merged.map((word) => normalize(word.english)));

  defaultWords.forEach((word) => {
    const key = normalize(word.english);
    if (!existing.has(key)) {
      merged.push(normalizeWord(word));
      existing.add(key);
    }
  });

  return merged;
}

function loadWords() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultWords;
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length) {
      return mergeDefaultWords(parsed);
    }
    return defaultWords;
  } catch {
    return defaultWords;
  }
}

function saveWords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  createAutoBackup();
}

function loadStats() {
  const saved = localStorage.getItem(STATS_KEY);
  if (!saved) return { correct: 0, total: 0 };
  try {
    const parsed = JSON.parse(saved);
    return {
      correct: Number(parsed.correct || 0),
      total: Number(parsed.total || 0)
    };
  } catch {
    return { correct: 0, total: 0 };
  }
}

function saveStats() {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  createAutoBackup();
}

/* =========================
   Backup
========================= */
function buildBackup() {
  return {
    app: "CCT English 4択 Quiz",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    stats,
    words
  };
}

function createAutoBackup() {
  const backup = buildBackup();
  localStorage.setItem(AUTO_BACKUP_KEY, JSON.stringify(backup, null, 2));
  updateBackupUI();
}

function getBackupText() {
  return localStorage.getItem(AUTO_BACKUP_KEY) || JSON.stringify(buildBackup(), null, 2);
}

function updateBackupUI() {
  const status = $("backupStatus");
  const area = $("exportArea");
  if (!status && !area) return;

  try {
    const backup = JSON.parse(getBackupText());
    const dateText = new Date(backup.exportedAt).toLocaleString("ja-JP");
    const masteredCount = backup.words.filter(isMastered).length;

    if (status) {
      status.textContent = `自動バックアップ：${dateText} / ${backup.words.length}語 / 3連続正解 ${masteredCount}語`;
    }

    if (area) {
      area.value = JSON.stringify(backup, null, 2);
    }
  } catch {
    if (status) status.textContent = "自動バックアップ：作成できませんでした";
  }
}

function downloadBackup() {
  const blob = new Blob([getBackupText()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 19).replaceAll(":", "-");
  link.href = url;
  link.download = `cct-english-backup-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function copyBackup() {
  const text = getBackupText();
  try {
    await navigator.clipboard.writeText(text);
    alert("最新バックアップJSONをコピーしました。");
  } catch {
    $("exportArea").value = text;
    $("exportArea").select();
    alert("コピーできなかったため、JSONを選択状態にしました。");
  }
}

function importWords(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      const importedWords = Array.isArray(imported) ? imported : imported.words;

      if (!Array.isArray(importedWords)) {
        throw new Error("Invalid JSON");
      }

      words = importedWords
        .map(normalizeWord)
        .filter((word) => word.english && word.japanese);

      if (imported.stats) {
        stats = {
          correct: Number(imported.stats.correct || 0),
          total: Number(imported.stats.total || 0)
        };
        saveStats();
      }

      saveWords();
      populateCategoryFilter();
      renderAll();
      renderChoiceQuestion();
      alert("JSONを読み込みました。");
    } catch {
      alert("JSONの読み込みに失敗しました。形式を確認してください。");
    }
  };

  reader.readAsText(file);
}

/* =========================
   Filters
========================= */
function normalize(text) {
  return String(text || "").trim().toLowerCase();
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getFilteredWords() {
  const category = $("categoryFilter").value;
  const filter = $("studyFilter").value;

  return words.filter((word) => {
    const categoryOk = category === "all" || word.category === category;
    const mastered = isMastered(word);

    let filterOk = !mastered;
    if (filter === "learning") filterOk = !mastered;
    if (filter === "weak") filterOk = word.weak && !mastered;
    if (filter === "mastered") filterOk = mastered;
    if (filter === "all") filterOk = true;

    return categoryOk && filterOk;
  });
}

/* =========================
   Render
========================= */
function renderAll() {
  renderDashboard();
  renderWordList();
  updateBackupUI();
}

function renderDashboard() {
  const mastered = words.filter(isMastered).length;
  const learning = words.length - mastered;
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;

  $("totalWords").textContent = words.length;
  $("learningWords").textContent = learning;
  $("masteredWords").textContent = mastered;
  $("accuracy").textContent = `${accuracy}%`;
}

function populateCategoryFilter() {
  const categories = [...new Set(words.map((word) => word.category).filter(Boolean))].sort();
  $("categoryFilter").innerHTML = `<option value="all">すべて</option>` +
    categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
}


function getSelectedQuestionMode() {
  const selected = $("questionMode") ? $("questionMode").value : "term";
  return selected === "question" ? "question" : "term";
}

function getQuestionText(word, mode) {
  return mode === "question" ? word.question : word.english;
}

function getCorrectAnswerText(word, mode) {
  return word.japanese;
}

function getWrongAnswerText(word, mode) {
  return word.japanese;
}

function getQuestionLabel(mode) {
  return mode === "question"
    ? "次の説明に当てはまる用語は？"
    : "この英語の意味は？";
}

function renderChoiceQuestion() {
  hasAnswered = false;
  currentQuestionMode = getSelectedQuestionMode();

  const candidates = getFilteredWords();

  if (!candidates.length) {
    currentWord = null;
    $("choiceCategory").textContent = "出題なし";
    $("choiceStreak").textContent = `連続正解：- / ${MASTER_STREAK}`;
    $("questionLabel").textContent = getQuestionLabel(currentQuestionMode);
    $("choiceQuestion").textContent = "出題できる単語がありません";
    $("choiceQuestion").classList.remove("question-mode");
    $("choiceOptions").innerHTML = "";
    $("choiceResult").textContent = "条件に合う単語がありません。分野や出題条件を変更してください。";
    return;
  }

  if (words.length < 4) {
    currentWord = null;
    $("choiceCategory").textContent = "単語不足";
    $("choiceStreak").textContent = `連続正解：- / ${MASTER_STREAK}`;
    $("questionLabel").textContent = getQuestionLabel(currentQuestionMode);
    $("choiceQuestion").textContent = "4択には4単語以上が必要です";
    $("choiceQuestion").classList.remove("question-mode");
    $("choiceOptions").innerHTML = "";
    $("choiceResult").textContent = "単語管理から単語を追加してください。";
    return;
  }

  currentWord = candidates[Math.floor(Math.random() * candidates.length)];

  const correctAnswer = getCorrectAnswerText(currentWord, currentQuestionMode);
  const wrongOptions = shuffleArray(words.filter((word) => word.id !== currentWord.id))
    .slice(0, 3)
    .map((word) => getWrongAnswerText(word, currentQuestionMode));

  const options = shuffleArray([correctAnswer, ...wrongOptions]);

  $("choiceCategory").textContent = currentWord.category;
  $("choiceStreak").textContent = `連続正解：${getCorrectStreak(currentWord)} / ${MASTER_STREAK}`;
  $("questionLabel").textContent = getQuestionLabel(currentQuestionMode);
  $("choiceQuestion").textContent = getQuestionText(currentWord, currentQuestionMode);
  $("choiceQuestion").classList.toggle("question-mode", currentQuestionMode === "question");
  $("choiceResult").textContent = "";
  $("choiceOptions").innerHTML = options
    .map((option) => `<button class="choice-option" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`)
    .join("");
}

function renderWordList() {
  const query = normalize($("searchInput")?.value || "");
  const filtered = words.filter((word) => {
    const target = normalize(`${word.english} ${word.japanese} ${word.category} ${word.memo}`);
    return target.includes(query);
  });

  $("wordList").innerHTML = filtered.map((word) => {
    const mastered = isMastered(word);
    const badges = [
      mastered ? '<span class="badge">3連続正解済み</span>' : '<span class="badge">学習中</span>',
      `<span class="badge">連続正解 ${getCorrectStreak(word)} / ${MASTER_STREAK}</span>`,
      word.weak ? '<span class="badge">苦手</span>' : "",
      `<span class="badge">${escapeHtml(word.category)}</span>`
    ].join("");

    return `
      <article class="word-row">
        <div>
          <h3>${escapeHtml(word.english)} / ${escapeHtml(word.japanese)}</h3>
          <p>${escapeHtml(word.example || word.memo || "")}</p>
          <div class="badges">${badges}</div>
        </div>
        <button class="delete-word" data-delete="${word.id}">削除</button>
      </article>
    `;
  }).join("");
}

/* =========================
   Quiz Logic
========================= */
function recordAnswer(id, correct) {
  stats.total += 1;
  if (correct) stats.correct += 1;

  let updatedWord = null;

  words = words.map((word) => {
    if (word.id !== id) return word;

    const nextStreak = correct ? Math.min(getCorrectStreak(word) + 1, MASTER_STREAK) : 0;
    const mastered = nextStreak >= MASTER_STREAK;

    updatedWord = {
      ...word,
      correctStreak: nextStreak,
      hidden: mastered,
      known: mastered,
      weak: correct ? false : true
    };

    return updatedWord;
  });

  saveStats();
  saveWords();

  return updatedWord;
}

function buildAnswerMessage(word, correct) {
  if (!word) return "";

  const streak = getCorrectStreak(word);
  const correctAnswer = getCorrectAnswerText(currentWord, currentQuestionMode);

  if (correct && streak >= MASTER_STREAK) {
    return "正解！3回連続正解したので、この単語は通常出題から外れました。";
  }

  if (correct) {
    return `正解！連続正解：${streak} / ${MASTER_STREAK}`;
  }

  return `不正解。正解は「${correctAnswer}」です。連続正解は0 / ${MASTER_STREAK}に戻りました。`;
}

function handleChoice(event) {
  const button = event.target.closest(".choice-option");
  if (!button || !currentWord || hasAnswered) return;

  hasAnswered = true;

  const selected = button.dataset.answer;
  const correctAnswer = getCorrectAnswerText(currentWord, currentQuestionMode);
  const correct = selected === correctAnswer;

  document.querySelectorAll(".choice-option").forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === correctAnswer) option.classList.add("correct");
    if (option === button && !correct) option.classList.add("wrong");
  });

  const updatedWord = recordAnswer(currentWord.id, correct);
  $("choiceResult").textContent = buildAnswerMessage(updatedWord, correct);

  renderAll();
}

/* =========================
   Management
========================= */
function addWord() {
  const english = $("newEnglish").value.trim();
  const japanese = $("newJapanese").value.trim();

  if (!english || !japanese) {
    alert("English と 日本語は必須です。");
    return;
  }

  words.unshift(normalizeWord({
    english,
    japanese,
    pronounce: $("newPronounce").value.trim(),
    category: $("newCategory").value.trim() || "Custom",
    example: $("newExample").value.trim(),
    memo: $("newMemo").value.trim(),
    question: "",
    correctStreak: 0,
    hidden: false,
    known: false,
    weak: false
  }));

  saveWords();

  ["newEnglish", "newJapanese", "newPronounce", "newCategory", "newExample", "newMemo"].forEach((id) => {
    $(id).value = "";
  });

  populateCategoryFilter();
  renderAll();
  renderChoiceQuestion();
  alert("単語を追加しました。");
}

function resetProgress() {
  if (!confirm("3連続正解・苦手・正答率をリセットしますか？")) return;

  words = words.map((word) => ({
    ...word,
    correctStreak: 0,
    hidden: false,
    known: false,
    weak: false
  }));

  stats = { correct: 0, total: 0 };

  saveWords();
  saveStats();
  renderAll();
  renderChoiceQuestion();
}

function deleteWord(id) {
  const word = words.find((item) => item.id === id);
  if (!word) return;
  if (!confirm(`「${word.english}」を削除しますか？`)) return;

  words = words.filter((item) => item.id !== id);
  saveWords();
  populateCategoryFilter();
  renderAll();
  renderChoiceQuestion();
}

/* =========================
   Events
========================= */
function bindEvents() {
  $("categoryFilter").addEventListener("change", renderChoiceQuestion);
  $("studyFilter").addEventListener("change", renderChoiceQuestion);
  $("questionMode").addEventListener("change", renderChoiceQuestion);

  $("shuffleBtn").addEventListener("click", () => {
    words = shuffleArray(words);
    saveWords();
    renderAll();
    renderChoiceQuestion();
  });

  $("resetProgressBtn").addEventListener("click", resetProgress);
  $("choiceOptions").addEventListener("click", handleChoice);
  $("nextChoiceBtn").addEventListener("click", renderChoiceQuestion);

  $("addWordBtn").addEventListener("click", addWord);
  $("downloadBackupBtn").addEventListener("click", downloadBackup);
  $("copyBackupBtn").addEventListener("click", copyBackup);
  $("importInput").addEventListener("change", importWords);

  $("searchInput").addEventListener("input", renderWordList);

  $("wordList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button) return;
    deleteWord(button.dataset.delete);
  });
}

/* =========================
   Utility
========================= */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

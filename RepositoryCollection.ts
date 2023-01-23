const AlertingChannel = require('./Entities/AlertingChannelRepository')
const AlertingPolicy = require('./Entities/AlertingPolicyRepository')
const Auth = require('./Entities/AuthRepository')
const Check = require('./Entities/CheckRepository')
const Nixstats = require('./Entities/NixstatsRepository')
const CheckA11y = require('./Entities/CheckA11yRepository')
const CheckBrokenResource = require('./Entities/CheckBrokenResourceRepository')
const CheckCertificate = require('./Entities/CheckCertificateRepository')
const CheckCookie = require('./Entities/CheckCookieRepository')
const CheckDeadLinks = require('./Entities/CheckDeadLinksRepository')
const CheckFileSize = require('./Entities/CheckFileSizeRepository')
const CheckHealthCheck = require('./Entities/CheckHealthCheckRepository')
const CheckInsecureContent = require('./Entities/CheckInsecureContentRepository')
const CheckJavaScriptErrors = require('./Entities/CheckJavaScriptErrorsRepository')
const CheckLighthouse = require('./Entities/CheckLighthouseRepository')
const CheckMobileFriendly = require('./Entities/CheckMobileFriendlyRepository')
const CheckSitemap = require('./Entities/CheckSitemapRepository')
const Tool = require('./Entities/ToolRepository')
const Crawler = require('./Entities/CrawlerRepository')
const CustomerHaendlerbundMetric = require('./Entities/CustomerHaendlerbundMetricRepository')
const CustomerHaendlerbund = require('./Entities/CustomerHaendlerbundRepository')
const CustomerMehrwertsteuercheck = require('./Entities/CustomerMehrwertsteuercheckRepository')
const Incident = require('./Entities/IncidentRepository')
const Marketplace = require('./Entities/MarketplaceRepository')
const Memory = require('./Entities/MemoryRepository')
const Metric = require('./Entities/MetricRepository')
const Component = require('./Entities/ComponentRepository')
const Project = require('./Entities/ProjectRepository')
const Screenshot = require('./Entities/ScreenshotRepository')
const System = require('./Entities/SystemRepository')
const Score = require('./Entities/ScoreRepository')
const Sequence = require('./Entities/SequenceRepository')
const Subscription = require('./Entities/SubscriptionRepository')
const ClusterCompany = require('./Entities/ClusterCompanyRepository')
const Invitation = require('./Entities/InvitationRepository')
const UserSubscription = require('./Entities/UserSubscriptionRepository')
const ClusterUser = require('./Entities/ClusterUserRepository')
const Websocket = require('./Entities/WebsocketRepository')

/**
 * This class was created by the LeanApiBundle.
 *
 * All changes made in this file will be overwritten by the next create run.
 *
 * @created 2023-01-23
 */
class RepositoryCollection {

  constructor(connection) {

    this._repositories = {}
    this._repositories[ 'alertingchannel' ] = new AlertingChannel(connection)
    this._repositories[ 'alertingpolicy' ] = new AlertingPolicy(connection)
    this._repositories[ 'auth' ] = new Auth(connection)
    this._repositories[ 'check' ] = new Check(connection)
    this._repositories[ 'nixstats' ] = new Nixstats(connection)
    this._repositories[ 'checka11y' ] = new CheckA11y(connection)
    this._repositories[ 'checkbrokenresource' ] = new CheckBrokenResource(connection)
    this._repositories[ 'checkcertificate' ] = new CheckCertificate(connection)
    this._repositories[ 'checkcookie' ] = new CheckCookie(connection)
    this._repositories[ 'checkdeadlinks' ] = new CheckDeadLinks(connection)
    this._repositories[ 'checkfilesize' ] = new CheckFileSize(connection)
    this._repositories[ 'checkhealthcheck' ] = new CheckHealthCheck(connection)
    this._repositories[ 'checkinsecurecontent' ] = new CheckInsecureContent(connection)
    this._repositories[ 'checkjavascripterrors' ] = new CheckJavaScriptErrors(connection)
    this._repositories[ 'checklighthouse' ] = new CheckLighthouse(connection)
    this._repositories[ 'checkmobilefriendly' ] = new CheckMobileFriendly(connection)
    this._repositories[ 'checksitemap' ] = new CheckSitemap(connection)
    this._repositories[ 'tool' ] = new Tool(connection)
    this._repositories[ 'crawler' ] = new Crawler(connection)
    this._repositories[ 'customerhaendlerbundmetric' ] = new CustomerHaendlerbundMetric(connection)
    this._repositories[ 'customerhaendlerbund' ] = new CustomerHaendlerbund(connection)
    this._repositories[ 'customermehrwertsteuercheck' ] = new CustomerMehrwertsteuercheck(connection)
    this._repositories[ 'incident' ] = new Incident(connection)
    this._repositories[ 'marketplace' ] = new Marketplace(connection)
    this._repositories[ 'memory' ] = new Memory(connection)
    this._repositories[ 'metric' ] = new Metric(connection)
    this._repositories[ 'component' ] = new Component(connection)
    this._repositories[ 'project' ] = new Project(connection)
    this._repositories[ 'screenshot' ] = new Screenshot(connection)
    this._repositories[ 'system' ] = new System(connection)
    this._repositories[ 'score' ] = new Score(connection)
    this._repositories[ 'sequence' ] = new Sequence(connection)
    this._repositories[ 'subscription' ] = new Subscription(connection)
    this._repositories[ 'clustercompany' ] = new ClusterCompany(connection)
    this._repositories[ 'invitation' ] = new Invitation(connection)
    this._repositories[ 'usersubscription' ] = new UserSubscription(connection)
    this._repositories[ 'clusteruser' ] = new ClusterUser(connection)
    this._repositories[ 'websocket' ] = new Websocket(connection)
    
  }

  getRepository(entityType) {

    const repositoryName = entityType.toLowerCase()
    if (this._repositories.hasOwnProperty(repositoryName)) {
      return this._repositories[ repositoryName ]
    } else {
      throw new Error('No repository with name ' + repositoryName + ' found. Registered repositories are: ' + JSON.stringify(Object.keys(this._repositories)))
    }

  }
}

module.exports = RepositoryCollection
